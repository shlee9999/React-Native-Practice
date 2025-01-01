module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~apis': './src/apis',
          '~components': './src/components',
          '~constants': './src/constants',
          '~hooks': './src/hooks',
          '~mocks': './src/mocks',
          '~screens': './src/screens',
          '~assets': './src/assets',
        },
      },
    ],
  ],
};
