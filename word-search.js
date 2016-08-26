const fs = require('fs');
var es = require('event-stream')
const { Readable, Writable, Transform} = require('stream')
const limit = require("./limit-ten")
const transformStream = Transform()


function arg(){
	return process.argv[2].toString()
}

let file = fs.createReadStream('/usr/share/dict/words', {flags: 'r'})
  .pipe(es.split(""))
  .pipe(es.map(transformStream._transform = (buffer, callback) => {
	 if (buffer.toString().startsWith((process.argv[2].toString()).toLowerCase())) {
	 	let rightWord = (buffer.toString().match(process.argv[2].toString()))
	 	console.log(rightWord.input)
  		callback(null, buffer.toString())
	 	// } else {
	 	// 	console.log("word not found")
	 	// callback()	
}
  }))


// 	transformStream._transform = (buffer, encoding, cb) => {
// 	 if (buffer.toString().startsWith(("app").toLowerCase())) {
// 	 	let rightWord = (buffer.toString().match("app"))
// 	 	console.log(rightWord)
// 	 	} else {
//   		console.log("Word Not Found");	
// }
// 	  cb(null, buffer)
// } 







.pipe(es.map(limit))
.pipe(process.stdout)



