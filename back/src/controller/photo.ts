
import { Controller, Inject, Post, Files, Fields,Get, Query } from '@midwayjs/core';
import * as fs from 'fs'; 
import * as path from 'path';

@Controller('/')
export class HomeController {

  @Inject()
  ctx;

  @Post('/upload')
  async upload(@Files() files, @Fields() fields) {
    console.log(files);
    // 处理上传文件
    // 保存文件到指定目录
    const savePath = path.join(__dirname, '../../public/uploads');
    console.log("savePath",savePath);
    for (const file of files) {
      const filePath = path.join(savePath, file.filename);
      const reader = fs.createReadStream(file.data);
      const writer = fs.createWriteStream(filePath);
      reader.pipe(writer);
    }
    // 返回上传结果
    return {
      files,
      fields
    }
  }


  private readonly IMAGE_DIR = path.join(__dirname, '../../public/uploads');
  @Get('/download')
  async download(@Query('imageName') imageName: string): Promise<void> {
    console.log(imageName);
    const imagePath = path.join(this.IMAGE_DIR, imageName);
    // 检查文件是否存在
    if (!fs.existsSync(imagePath)) {  
      this.ctx.status = 404;  
      this.ctx.body = 'Image not found';  
      return;  
    }  
    // 设置响应头
    // 获取文件扩展名并转换为小写  
    const ext = path.extname(imagePath).toLowerCase();  
  
    // 根据文件扩展名设置Content-Type  
    let contentType: string;  
    switch (ext) {  
      case '.png':  
        contentType = 'image/png';  
        break;  
      case '.jpg':  
      case '.jpeg':  
        contentType = 'image/jpeg';  
        break;  
      // 可以根据需要添加更多类型  
      default:  
        contentType = 'application/octet-stream'; // 未知类型时使用的默认MIME类型  
        break;  
    }   

    // 设置响应头  
    if (typeof this.ctx.set !== 'function') {  
        throw new Error('Invalid context object');  
    }  
    this.ctx.set('Content-Type', contentType); 

    // 读取文件并返回  
    const fileStream = fs.createReadStream(imagePath);  
    this.ctx.body = fileStream;  
  }
}