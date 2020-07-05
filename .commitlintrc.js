const [,,typeEnum] = require('@commitlint/config-angular').rules['type-enum'];

module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'subject-empty': [0, 'always'],
    'header-max-length': [0, 'always', 106],
    'type-enum': [2, 'always', [...typeEnum, 'chore', 'ref']],
  },
};
