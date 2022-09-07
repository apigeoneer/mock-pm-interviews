const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 6,
            max: 30
        },
        email: {
            type: String,
            required: true,
            max: 50
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 30
        },
        role: {
            type: String,
            required: true,
            min: 6,
            max: 30
        },
        company: {
            type: String,
            required: true,
            min: 3,
            max: 30
        },
        experience: {
            type: Number,
            min: 0,
            max: 60
        },
        bio: {
            type: String,
            min: 6,
            max: 50
        },
        interviewsTaken: {
            type: Number,
            min: 0
        },
        interviewsGiven: {
            type: Number,
            min: 0
        },
        daysAvailable: {
            type: Number,
            min: 1
        },
        datesAvailable: {
            type: Array,
            default: []
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        linkedIn: {
            type: String
        },
        discord: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);