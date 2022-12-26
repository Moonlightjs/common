import { Constructor } from '@common/type/function';
import { Prisma } from '@prisma/client';
import { plainToClass } from 'class-transformer';

export function toDto<T>(metatype: Constructor<T>, entity: any): T {
  const result = parseObject(entity);
  return plainToClass(metatype, result, { excludeExtraneousValues: true });
}

function parseObject(obj: any) {
  const result: Record<any, any> = {};
  let key, val;
  for (key in obj) {
    val = parseValue(obj[key]);
    result[key] = val;
  }
  return result;
}

function parseValue(val: any): any {
  if (val === null) {
    return null;
  }
  if (val && val.getMonth && typeof val.getMonth === 'function') {
    return val.toISOString();
  } else if (val instanceof Prisma.Decimal) {
    return val.toNumber();
  } else if (Array.isArray(val)) {
    return val.map((item) => parseValue(item));
  } else if (typeof val === 'object') {
    return parseObject(val);
  } else if (typeof val === 'bigint') {
    return val.toString();
  } else {
    return val;
  }
}
