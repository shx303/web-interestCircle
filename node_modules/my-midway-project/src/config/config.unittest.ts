import { MidwayConfig } from '@midwayjs/core';
import { join } from 'path';
export default {
  koa: {
    port: null,
  },
} as MidwayConfig;

export const upload = {
  mode: 'file',
  fileSize: '10mb',
  dir: 'public/uploads'
};

export const staticFile = {
  prefix: '/public/',
  dir: join(__dirname, '../public')
};