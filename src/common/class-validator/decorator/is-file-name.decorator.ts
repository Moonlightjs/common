import { registerDecorator, ValidationOptions } from 'class-validator';

export function filenameReservedRegex() {
  return /[<>:"/\\|?*\u0000-\u001F]/g;
}

export function windowsReservedNameRegex() {
  return /^(con|prn|aux|nul|com\d|lpt\d)$/i;
}

export function isValidFilename(str: string) {
  if (!str || str.length > 255) {
    return false;
  }

  if (
    filenameReservedRegex().test(str) ||
    windowsReservedNameRegex().test(str)
  ) {
    return false;
  }

  if (str === '.' || str === '..') {
    return false;
  }

  return true;
}

export function IsFilename(validationOptions?: ValidationOptions) {
  return function (object: Record<any, any>, propertyName: string) {
    registerDecorator({
      name: 'isFilename',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && isValidFilename(value);
        },
      },
    });
  };
}
