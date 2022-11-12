import { ClassConstructor } from 'class-transformer';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
export const CompareRef = <T>(
  type: ClassConstructor<T>,
  condition: (object: T) => boolean,
  validationOptions?: ValidationOptions,
) => {
  return (object: Record<any, any>, propertyName: string) => {
    registerDecorator({
      name: 'CompareRef',
      target: object.constructor,
      propertyName,
      constraints: [condition],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [condition] = args.constraints;
          return condition(args.object);
        },
        defaultMessage(validationArguments?: ValidationArguments): string {
          const propertyName = validationArguments?.property;
          return `${propertyName} does not match the condition`;
        },
      },
    });
  };
};
