module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-mthorning-om`
  extends: ["mthorning-om"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
