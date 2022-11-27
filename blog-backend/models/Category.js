const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema ({
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true}
);


// export model
module.exports = mongoose.model("Category", CategorySchema);
