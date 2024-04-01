const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
    return { 
        mode: env.mode || 'development',
        entry: path.resolve(__dirname,'src/index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname,'src/index.html')})
        ],
        module: {
            rules: [{ 
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader','css-loader','sass-loader'
                ]
            }]  
        },
        devServer : {
            contentBase: path.resolve(__dirname,'dist'),
            port: 3000,
            open: true
        }
        
    }
}