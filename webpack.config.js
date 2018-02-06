const path = require( "path" );

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve( __dirname, "target" ),
        filename: "[name].js"
    },
    module: {
        rules: [ {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/

        }, {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/

        } ]
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js" ],
        alias: {
            "@root": ".",
            "@": "./src"
        }
    }
};
