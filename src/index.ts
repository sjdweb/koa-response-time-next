import Koa = require('koa');

export default function responseTimeMiddleware(): Koa.Middleware {
  return async (ctx: Koa.Context, next: () => Promise<any>) => {
    const start = Date.now();
    await next();
    const delta = Math.ceil(Date.now() - start);
    ctx.set('X-Response-Time', `${delta}ms`);
  };
}
