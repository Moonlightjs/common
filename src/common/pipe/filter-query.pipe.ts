import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isObject } from '@utils/validate';

@Injectable()
export class FilterPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { type } = metadata;
    // Make sure to only run your logic on queries
    if (type === 'query') return this.transformQuery(value);

    return value;
  }

  transformQuery(query: any) {
    if (typeof query !== 'object' || !query) return query;

    const { take, skip } = query;
    if (take) query.take = parseInt(take);
    if (skip) query.skip = parseInt(skip);

    return parseObject(query);
  }
}

function parseValue(val: any): any {
  if (Array.isArray(val)) {
    return val.map((item) => parseValue(item));
  } else if (isObject(val)) {
    return parseObject(val);
  } else {
    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  }
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
