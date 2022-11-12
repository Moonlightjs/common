import { SetMetadata } from '@nestjs/common';

export const IS_IGNORE_AUTHORIZATION = 'isIgnoreAuthorization';
export const IgnoreAuthorization = () =>
  SetMetadata(IS_IGNORE_AUTHORIZATION, true);
