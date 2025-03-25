const path = require('path');

module.exports = {
  webpack: function (config) {
    // Добавляем алиасы
    config.resolve = {
      ...config.resolve,
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    };

    return config;
  },
};
