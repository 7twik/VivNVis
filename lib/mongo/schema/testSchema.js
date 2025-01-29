import mongoose from 'mongoose';
const { Schema } = mongoose;

const testSchema = new Schema({
    Url: {
        type: String,
        required: true,  
    },
    Name: {
        type: String,
        required: true,
    },
    Message:{
        type: String,
    },
    Designation:{
        type: String,
    },
});

export default mongoose.models.Test || mongoose.model('Test', testSchema) ;
