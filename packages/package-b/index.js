// hoisting
require('@monorepo/package-a')

const moment = require('moment')

console.log(moment().format('yyyy-MM-DD hh:mm:ss'))
console.log("This is package-b")