import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const PhotoSchema= new Schema ({
    'area': {
        type: String,
        reuire: true    
    },
    'sick': {
        type: Boolean,
        require:true
    },
    'diagnosis': {
        type: String,
        require: true
    },
},{'collection' : 'photos',timestamps: true});

export default mongoose.model('photos',PhotoSchema)