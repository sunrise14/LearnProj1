const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js", // tells Webpack where our application starts and where to start bundling our file.
    mode: "development", // lets webpack know we're working in development mode, saves us from adding a mode flag when we run dev server.
    module: { // the module object helps define how your exported javascript modules are transformed acc to the given array of rules.
        rules:[
            { // first rule is all about transforming our ES6 and JSX syntax. Test and exclude properties are conditions to match the file against.
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/, //matches anything outside node_modules and bower_components directories.
                loader: "babel-loader", // directing webpack to use babel in transforming .js and .jsx files
                options: {presets:["@babel/env"]} // Specifying webpack that we want to use the env preset in options.

            },
            { // this rule is for processing CSS.
                test:/\.css$/,
                use:["style-loader","css-loader"] // css-loader requires style-loader in order to work. Loader is shorthand for use property when only one loader is being used.
            }
        ]
    },
    resolve: { extensions:['*','.js','.jsx'] }, // allows us to specify which extensions Webpack will resolve. This allows us to import modules without needing to add their extensions.
    output: { //output property tells Webpack where to put our bundled code.
        path: path.resolve(__dirname,"dist/"),
        publicPath: "/dist/", // this property specifies what directory the bundle should go in and also tells webpack-dev-server where to serve files from. 
        filename: "bundle.js"
    },
    devServer: { // we set up webpack-dev-server in the devServer property. 
        contentBase: path.join(__dirname, "public/"),
        port: 3000, //port we want to run the server on
        publicPath: "http://localhost:3000/dist/", // It specifies the public URL of the directory - at least as far as webpack-dev-server will know or care. You get 404's if this is incorrect.
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()] // helps so we dont have to constantly refresh to see our changes. We should make sure to set hotOnly to true in devServer
};