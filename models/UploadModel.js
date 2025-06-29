import mongoose, { Schema } from "mongoose";


const UploadSchema = new Schema({
    imgUrl: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('uploadSchema',UploadSchema);