import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as cors from '@koa/cors';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as path from 'path';
import * as upload from '@midwayjs/upload';
import * as staticServe from "koa-static";

import { ReportMiddleware } from './middleware/report.middleware';

@Configuration({
  imports: [
    koa,
    validate,
    upload,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [path.join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady() {
    this.app.use(staticServe(path.join(__dirname, './public/uploads')));

    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
    this.app.use(cors({
      origin: "*",
    }
    ));
    
  }
}
