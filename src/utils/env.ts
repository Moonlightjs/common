export const isDevelopment = () => {
  const env = process.env.NODE_ENV || 'development';
  return env === 'development';
};

export const isNotDevelopment = () => {
  const env = process.env.NODE_ENV || 'development';
  return ['alpha', 'production'].includes(env);
};

export const isProduction = () => {
  const env = process.env.NODE_ENV || 'development';
  return ['production'].includes(env);
};
