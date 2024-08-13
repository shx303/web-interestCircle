import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) {
            alert('请选择一个文件');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://127.0.0.1:7001/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log('文件上传成功', response.data);
            setFilename(response.data.filename);
        })
        .catch(error => {
            console.error('文件上传失败', error);
        });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>上传</button>
            {filename && <ImageDisplay filename={filename} />}
        </div>
    );
};

const ImageDisplay = ({ filename }) => {
    const imageUrl = `http://127.0.0.1:7001/uploads/${filename}`;

    return imageUrl;
};

export default ImageUpload;
