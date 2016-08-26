const { Transform } = require("stream");




const transformer = Transform()
transformer._transform = (buff, enc, cb) => {


	
  cb(null, buff.toString())
}

module.exports = transformer
