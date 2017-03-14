module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: './dist/js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: /node_modules/
            }

        ]
    },
}