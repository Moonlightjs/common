import {
  SuccessResponseDto,
  SuccessResponsePagedDto,
} from '@common/dto/abstract.dto';
import { applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';
export interface ApiResponseMetadata {
  status?: number | 'default';
  // eslint-disable-next-line @typescript-eslint/ban-types
  model: Function;
  isArray?: boolean;
  description?: string;
}

export const OpenApiPaginationResponse = (model: any) => {
  return applyDecorators(
    ApiExtraModels(SuccessResponsePagedDto, model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(SuccessResponsePagedDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};

export const OpenApiResponse = (options: ApiResponseMetadata) => {
  return applyDecorators(
    ApiExtraModels(SuccessResponseDto, options.model),
    ApiResponse({
      status: options.status,
      description: options.description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(SuccessResponseDto) },
          {
            properties: {
              data: options.isArray
                ? {
                    type: 'array',
                    items: { $ref: getSchemaPath(options.model) },
                  }
                : {
                    type: 'object',
                    $ref: getSchemaPath(options.model),
                  },
            },
          },
        ],
      },
    }),
  );
};
