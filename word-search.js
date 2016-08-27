const fs = require('fs');
var es = require('event-stream') ////npm installed this
const { Readable, Transform} = require('stream')
const limit = require("./limit-ten")



let file = fs.createReadStream('/usr/share/dict/words') ////starts reading file
  .pipe(es.split())///////Splits all the data into single lines
  .pipe(es.map((buffer, callback) => {
	 if (buffer.toString().startsWith((process.argv[2].toString()))) {
  		callback(null, buffer.toString() + '\n')
		} else {
		callback()
	}
  	})	
) 
/////pipe to limit-ten.js
.pipe(limit)
/////pipe to stdout/////
.pipe(process.stdout)



