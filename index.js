//为在node中使用es6的import和export
require('babel-register')({
    presets: ['env']
})

module.exports = require('./src/server')
