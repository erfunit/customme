const path = require('path');

const buildEslintCommand = (filenames) =>
  `eslint --fix --file ${filenames
    .filter((f) => f.startsWith('src/'))
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => {
    const lintCommand = buildEslintCommand(filenames);
    return lintCommand ? [lintCommand] : [];
  },
};
