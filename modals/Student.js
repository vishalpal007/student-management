const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batchId: {
        type: mongoose.Types.ObjectId,
        ref: "batch",
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("student", studentSchema)