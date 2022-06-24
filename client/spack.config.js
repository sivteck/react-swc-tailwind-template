const { config } = require('@swc/core/spack')


module.exports = config({
    entry: {
        'web': __dirname + '/src/index.jsx',
    },
    output: {
        path: __dirname + '/build/'
    },
    module: {},
});
