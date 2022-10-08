import path from 'path'

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ],
          plugins: [
            'babel-plugin-styled-components'
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    client: {
      webSocketURL: {
        port: process.env.PORT,
        hostname: 'localhost'
      }
    },
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    historyApiFallback: { index: 'index.html' }
  }
}

module.exports = config