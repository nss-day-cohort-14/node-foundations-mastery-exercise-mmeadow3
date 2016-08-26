const { Transform } = require("stream");




const transformer = Transform()
transformer._transform = (buff, enc, cb) => {
  cb(null, buff.toString().toUpperCase())
}

module.exports = transformer


// const transformer = Transform()
// transformer._transform = function (buff, enc, cb) {
//  cb (null, function () { 
//  	if (`${buff.toString().includes("z")}`){
//  console.log(`${buff.toString()}`)
//  	} else {
//  		console.log("words not found")
//  	}
// })
// }
// module.exports = transformer