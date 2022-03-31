module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        // [chunkhash]: her build işleminde benzersiz bir çıktı üretmek için kullanılır.
        path: __dirname + '/dist'
    }
}

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // ...
    plugins: [new CleanWebpackPlugin()]
}

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // ...
  plugins: [
    // ...
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
      // inject: true => Otomatik olarak build dosyasını script tag'ı olarak eklemeyi sağlar.
    })
  ]
}

module.exports = {
    // ...
    module: {
      rules: [
        {
          test: [/.js$/], // test => Hangi dosya tiplerinin işlemden geçeceğini belirttiğimiz property
          exclude: /(node_modules)/, // exclude => Hangi klasörlerin işlemden geçmeyeceğini belirttiğimiz property
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
    // ...
  }

  
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: [/.css$|.scss$|.sass$/],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
      // ...
    ]
  },
  plugins: [
    // ...
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
  