module.exports = {
    // configuration
    module: {
        rules: [
          {
            test: /\.(glsl|vs|fs)$/,
            loader: 'shader-loader'
          }
        ]
    }
};