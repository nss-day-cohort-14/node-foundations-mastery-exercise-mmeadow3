const { Transform } = require("stream");

const transformer = Transform()

counter = 0
transformer._transform = (buff, enc, cb) => {
	if (counter < 10){
		counter++;
	cb(null, `${buff.toString()}\n`)
	} else {
		cb()
	}
}

module.exports = transformer


