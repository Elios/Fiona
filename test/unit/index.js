import Vue from 'vue'

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// 扫描路径下的除正则表达式匹配的所有文件，使用webpack.config.base.js定义的loader加载
const srcContext = require.context('@/client/components', true, /^\.\/(?!index(\.js)?$)/)
srcContext.keys().forEach(srcContext)
