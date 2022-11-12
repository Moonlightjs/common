import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export const IsStartsWith = (
  searchString: string,
  position?: number,
  validationOptions?: ValidationOptions,
) => {
  return (object: Record<any, any>, propertyName: string) => {
    registerDecorator({
      name: 'IsStartsWith',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          return value.startsWith(searchString, position);
        },
        defaultMessage(validationArguments?: ValidationArguments): string {
          const propertyName = validationArguments?.property;
          return `${propertyName} must be starts with '${searchString}`;
        },
      },
    });
  };
};
