import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value, {
      excludeExtraneousValues: true,
    });
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException({
        message: 'Validation failed',
        errors: formatValidationError(errors),
      });
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}

export type ValidationErrorFormat = {
  /**
   * Object's property that haven't pass validation.
   */
  property: string;
  /**
   * Value that haven't pass a validation.
   *
   * OPTIONAL - configurable via the ValidatorOptions.validationError.value option
   */
  value?: any;
  /**
   * Constraints that failed validation with error messages.
   */
  constraints?: {
    [type: string]: string;
  };
  /**
   * Contains all nested validation errors of the property.
   */
  children?: ValidationErrorFormat[];
  contexts?: {
    [type: string]: any;
  };
};

function formatValidationError(
  errors: ValidationError[],
): ValidationErrorFormat[] {
  return errors.map((err) => {
    return {
      ...err,
      target: undefined,
      children: err.children?.length ? formatValidationError(err.children) : [],
    };
  });
}
