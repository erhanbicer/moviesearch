module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@router': './src/router',
          '@services': './src/services',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@resources': './src/resources',
        },
      },
    ],
  ],
};
