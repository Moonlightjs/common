export function pluralize(noun: string): string {
  // Define some rules for pluralization
  const pluralRules: [RegExp, string][] = [
    [/s$/i, 's'],
    [/^(ax|test)is$/i, '$1es'],
    [/(octop|vir)us$/i, '$1i'],
    [/(alias|status)$/i, '$1es'],
    [/(bu)s$/i, '$1ses'],
    [/(buffal|tomat)o$/i, '$1oes'],
    [/([ti])um$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:([^f])fe|([lr])f)$/i, '$1$2ves'],
    [/(hive)$/i, '$1s'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/(x|ch|ss|sh)$/i, '$1es'],
    [/(matr|vert|ind)(?:ix|ex)$/i, '$1ices'],
    [/^(m|l)ouse$/i, '$1ice'],
    [/^(m|l)ice$/i, '$1ice'],
    [/^(ox)$/i, '$1en'],
    [/^(quiz)$/i, '$1zes'],
  ];

  // Check if the noun is already plural
  if (noun.endsWith('s')) {
    return noun;
  }

  // Apply the pluralization rules
  for (const [rule, replacement] of pluralRules) {
    if (rule.test(noun)) {
      return noun.replace(rule, replacement);
    }
  }

  // If no rules match, just add "s"
  return noun + 's';
}
