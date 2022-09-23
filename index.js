const add = require('./addition')
const sub = require('./subtraction')
const mul = require('./multiplication')
const div = require('./division')

const log = console.log;
// log((process.argv))

let a = Number(process.argv[2]) , b = Number(process.argv[3]);
log(add(a,b))
log(sub(a,b))
log(mul(a,b))
log(div(a,b))