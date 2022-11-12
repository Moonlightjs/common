export function isObject(val: any) {
  return val.constructor === Object;
}

export function isNumber(val: any) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

export function isBoolean(val: any) {
  return val === 'false' || val === 'true';
}

export function isArray(val: any) {
  return Array.isArray(val);
}

export const isNullOrUndefined = (value: any) => {
  return typeof value === 'undefined' || value === null;
};

export const isUndefined = (value: any) => {
  return typeof value === 'undefined';
};

export const isNull = (value: any) => {
  return value === null;
};

export const isEmpty = (value: any) => {
  return isNull(value);
};

export function isObjectEmpty(val: any) {
  return Object.values(val).every((el) => el === undefined || el === null);
}

export const isDate = (dateString: string): boolean => {
  return !isNaN(Date.parse(dateString));
};
