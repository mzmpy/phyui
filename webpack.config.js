const path = require('path')

module.exports = {
  mode: 'production',
  entry: './phyui/index.ts',
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: "ts-loader",
            options: {
              transpileOnly: false
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]

      }
    ]
  },
  externals: {
    vue: 'vue'
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'phyui.js',
    library: {
      name: 'phyui',
      type: 'umd',
      export: 'default'
    },
    globalObject: 'this'
  }
}