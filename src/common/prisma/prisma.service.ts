import {
  BadRequestException,
  INestApplication,
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
  Optional,
  Scope,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as httpContext from 'express-http-context';
import { PrismaServiceOptions } from './interfaces';
import { PRISMA_SERVICE_OPTIONS } from './prisma.constants';

@Injectable({ scope: Scope.DEFAULT })
export class PrismaService extends PrismaClient implements OnModuleInit {
  protected readonly logger = new Logger(PrismaService.name);
  constructor(
    @Optional()
    @Inject(PRISMA_SERVICE_OPTIONS)
    private readonly prismaServiceOptions: PrismaServiceOptions = {},
  ) {
    super(prismaServiceOptions.prismaOptions);

    console.log(this.prismaServiceOptions.events);
    if (this.prismaServiceOptions.events) {
      Object.keys(this.prismaServiceOptions.events).forEach((eventName) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.$on(eventName, this.prismaServiceOptions.events[eventName]);
      });
    }

    if (this.prismaServiceOptions.middlewares) {
      this.prismaServiceOptions.middlewares.forEach((middleware) =>
        this.$use(middleware),
      );
    }
  }
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
