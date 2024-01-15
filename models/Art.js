import mongoose from "mongoose";

 const ArtSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    text: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,

    },
    imageUrl: String,
 },
 {
    timestamps: true,
 });

 export default mongoose.model('Art', ArtSchema)