import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.html']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: '/node_modules/',
                loader: 'ts-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};

export default config;
