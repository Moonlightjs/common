import { Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as httpContext from 'express-http-context';
import { v4 as uuidv4 } from 'uuid';

const logger = new Logger('LoggerRequest');
declare module 'express' {
  interface Request {
    id: string;
  }
}
export const GlobalApiLoggerMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { ip, method, originalUrl: url, headers } = request;
  if (!process.env.NODE_ENV || url === '/api/v1/health') {
    return next();
  }
  request.id = uuidv4();
  httpContext.ns.bindEmitter(request);
  httpContext.ns.bindEmitter(response);
  httpContext.set('requestId', request.id);
  httpContext.set('originalUrl', request['originalUrl']);
  const userAgent = request.get('user-agent') || '';
  const startHrTime = process.hrtime();
  let responseData = '';
  const logData = () => {
    const { statusCode } = response as any;
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    const regex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
    const ipFound = headers['forwarded']?.match(regex);
    const data = {
      ip: (ipFound && ipFound[0]) || ip,
      method,
      url,
      requestId: request['id'],
      status: statusCode,
      userAgent,
      responseTime: `${elapsedTimeInMs}ms`,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      userId: request.user?.['user']?.id,
      responseData: statusCode >= 400 ? responseData : undefined,
      type: 'applicationLog',
    };
    logger.log(data);
  };
  const originalSendFunc = response.send.bind(response);
  response.send = function (body) {
    responseData = body;
    return originalSendFunc(body);
  };
  response.on('finish', logData);
  next();
};
