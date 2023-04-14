export const removeUndefinedProps = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(removeUndefinedProps);
  }

  return Object.fromEntries(
    Object.entries(obj)
      .map(([key, value]) => [key, removeUndefinedProps(value)])
      .filter(([key, value]) => value !== undefined),
  );
};
