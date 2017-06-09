var cp = require('child_process');
var child = cp.execFile('casperjs child.js')

child.stdout.on('data',(data)=>{
    console.log(data)
} )