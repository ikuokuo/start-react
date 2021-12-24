const path = require('path');
const CracoLessPlugin = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: true,
              // compact: true,
            }),
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
};
