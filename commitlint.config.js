module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat: ', // A new feature
        'fix: ', // A bug fix
        'docs: ', // Documentation changes
        'style: ', // Code style changes (white-space, formatting, etc.)
        'refactor: ', // Code refactoring (not adding features or fixing bugs)
        'perf: ', // Performance improvements
        'test: ', // Adding or updating tests
        'chore: ', // Changes to build process, dependencies, etc.
        'ci: ', // CI/CD related changes
        'revert: ', // Reverting a previous commit
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'], // First letter capitalized
  },
};
