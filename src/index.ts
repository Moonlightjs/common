import * as moduleAlias from 'module-alias';
moduleAlias.addAliases({
  '@common': `${__dirname}/common`,
  '@utils': `${__dirname}/utils`,
});
export * from './common';
export * from './utils';
