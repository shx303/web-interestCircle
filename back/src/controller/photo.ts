import { Controller, Get, Param,Provide } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import * as fs from 'fs';
import * as path from 'path';

@Provide()
@Controller('/photos')
export class PhotoController {

  @Get('/:filename')
  async getPhoto(@Param('filename') filename: string, ctx: Context) {
    const imagePath = path.join(__dirname, '../../public/uploads', filename);
    console.log(ctx);

    // 检查文件是否存在
    if (!fs.existsSync(imagePath)) {
      ctx.status = 404;
      ctx.body = 'File not found';
      return;
    }

    //onsole.log('Serving image:', imagePath);
    // 设置响应头
    if (typeof ctx.set !== 'function') {
        throw new Error('Invalid context object');
    }
    ctx.Type('Content-Type', 'image/jpg'); // 根据实际图片类型设置

    // 读取文件并返回
    const fileStream = fs.createReadStream(imagePath);
    ctx.body = fileStream;
  }
}
