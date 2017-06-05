module.exports = {
  entry: [
    './src/'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
            presets: ['react', 'es2015', 'stage-1']
        },
        exclude: /node_modules/
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif|json)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
