let path = require('path');

let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: {
      navigation: path.resolve(__dirname, 'src/navigation.js'),
      popular: path.resolve(__dirname, 'src/popular.js'),
      discoverYourStyle: path.resolve(__dirname, 'src/discoverYourStyle.js'),
      newBlock: path.resolve(__dirname, 'src/newBlock.js'),
      testimonials: path.resolve(__dirname, 'src/testimonials.js'),
      homepage_main: path.resolve(__dirname, 'src/homepage_main.js'),
      catalog_main: path.resolve(__dirname, 'src/catalog_main.js'),
      catalog_render: path.resolve(__dirname, 'src/catalog_render.js'),
      catalog_filtersView: path.resolve(__dirname, 'src/catalog_filtersView.js'),
      catalog_sort: path.resolve(__dirname, 'src/catalog_sort.js')
    },
    output: {
        path: path.resolve(__dirname, 'public/js/'),
        filename: '[name].js',
        publicPath: 'public/js/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: 'babel-loader',
                // exclude: '/node_modules/'
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })

                // exclude: '/node_modules/'
            },

        ]
    },
    plugins: [
        new ExtractTextPlugin("css/style.css"),
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    console.log(options);

    conf.devtool = production
        ? false
        : 'eval-sourcemap';
    return conf;
};
