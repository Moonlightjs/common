import { Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
const logger = new Logger(PrismaService.name);
export const logQueryEvent = (event: Prisma.QueryEvent) => {
  logger.verbose(
    '================================================================',
  );
  logger.verbose('Timestamp: ' + event.timestamp.toISOString());
  logger.verbose('Query: ' + event.query);
  logger.verbose('Params: ' + event.params);
  logger.verbose('Duration: ' + event.duration + 'ms');
  logger.verbose(
    '================================================================',
  );
};
