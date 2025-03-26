const path = require('path');

module.exports = {
  webpack: function (config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    };

    return config;
  },
};
