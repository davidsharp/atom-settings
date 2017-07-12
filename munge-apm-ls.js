#!/usr/bin/env node

var stdin = process.openStdin();

var T = '├──'
var L = '└──'
var linebreak = '\n'

var data = "";

stdin.on('data', function(chunk) {
  data += chunk;
});

stdin.on('end', function() {
  var mungeddata = data.split(linebreak+linebreak)
  mungeddata = mungeddata.map(function(c){return c.split(T).join('').split(L).join('').split(linebreak)})
  console.log(JSON.stringify(mungeddata))
  //console.log("DATA:\n" + data + "\nEND DATA");
});

//console.log(process.argv.join(' – '))
