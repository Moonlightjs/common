import {
  isISO8601,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export const IsDateStringISO = (validationOptions?: ValidationOptions) => {
  return (object: Record<any, any>, propertyName: string) => {
    registerDecorator({
      name: 'IsDateStringISO',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return isISO8601(value) && new Date(value).toISOString() === value;
        },
        defaultMessage(validationArguments?: ValidationArguments): string {
          const propertyName = validationArguments?.property;
          return `${propertyName} must be a valid ISO 8601 date string`;
        },
      },
    });
  };
};
