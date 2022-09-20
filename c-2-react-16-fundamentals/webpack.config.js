const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.tsx',
   module: {
      rules: [
         {
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: {
               loader: "ts-loader",
            },
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
            }
         },
         {
            test: /\.less$/i,
            use: [
               { loader: 'style-loader' },
               { loader: 'css-loader' },
               { loader: 'less-loader' }
            ]
         }
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'C-2 React 16 Fundamentals',
         template: 'src/index.html'
      })
   ]
};