import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export function IsNotUndefined(validationOptions?: ValidationOptions) {
  return function (object: Record<any, any>, propertyName: string) {
    registerDecorator({
      name: 'IsNotUndefined',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return value !== undefined;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must not be undefined, and allow null`;
        },
      },
    });
  };
}
