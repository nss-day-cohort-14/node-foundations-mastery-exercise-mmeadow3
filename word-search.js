const fs = require('fs');
var es = require('event-stream')
const { Readable, Writable, Transform} = require('stream')
const limit = require("./limit-ten")
const transformStream = Transform()



let file = fs.createReadStream('/usr/share/dict/words')
  .pipe(es.split())
  .pipe(es.map(transformStream._transform = (buffer, callback) => {
	 if (buffer.toString().startsWith((process.argv[2].toString()).toLowerCase())) {
	 	let rightWord = (buffer.toString())
  		callback(null, buffer.toString() + '\n')
		} 
		callback()
  	})	
) 

.pipe(limit)
.pipe(process.stdout)



