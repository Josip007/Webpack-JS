const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundel.js',
        path: path.resolve(__dirname, 'dist/')
    }
}