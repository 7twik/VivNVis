import mongoose from 'mongoose';
const { Schema } = mongoose;

const imgSchema = new Schema({
    page: {
        type: String,
        required: true,  
    },
    url:{
        type: String,
    }
}, { timestamps: true });

export default mongoose.models.Img || mongoose.model('Img', imgSchema) ;
