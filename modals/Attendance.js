const mongoose = require("mongoose")


const attendanceSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    studId: {
        type: mongoose.Types.ObjectId,
        ref: "student",
        required: true
    },
    isPresent: {
        type: Boolean,
        default: true
    },
    type: {
        type: String,
        default: "offline",
        enum: ["offline", "online"]
    }
}, { timestamps: true })

module.exports = mongoose.model("attendance", attendanceSchema)