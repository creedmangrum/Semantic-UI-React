import './setup'

const testsContext = require.context('./', true, /-test\.js$/)

// TODO uncomment and fix failing tests
// console.error = (...args) => { throw new Error('console.error was called!\n\n' + args.join(' ')) }
// console.warn = (...args) => { throw new Error('console.warn was called!\n\n' + args.join(' ')) }

// only re-run changed tests, or all if none changed
// https://www.npmjs.com/package/karma-webpack-with-fast-source-maps
const __karmaWebpackManifest__ = []
let runnable = testsContext.keys().filter(path => __karmaWebpackManifest__.indexOf(path) >= 0)

if (!runnable.length) runnable = testsContext.keys()

runnable.forEach(testsContext)
