const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	name:{
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
    languages:[{
        type:String,
    }],
	githubLink: {
		type: String,
		required: true,
		maxLength: 20,
	},
	image: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("Data", dataSchema);
