import mongoose from 'mongoose';
const { Schema } = mongoose;

const landSchema = new Schema({
    fix:{
        type: String,
    },
    vid1:{
        type: String,
    },
    vid2:{
        type: String,
    },
    vid3:{
        type: String,
    },
    im1:{
        type: String,
    },
    im2:{
        type: String,
    },
    im3:{
        type: String,
    },
    im4:{
        type: String,
    },
    im5:{
        type: String,
    },
    im6:{
        type: String,
    },
    im7:{
        type: String,
    },
    im8:{
        type: String,
    },
    im9:{
        type: String,
    },
    im10:{
        type: String,
    },
    im11:{
        type: String,
    },
    im12:{
        type: String,
    },
}, { timestamps: true });

export default mongoose.models.Land|| mongoose.model('Land', landSchema) ;
