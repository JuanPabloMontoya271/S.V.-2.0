import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RadioSchema = new Schema({
    'area': {
        type: String,
        require: true
    },
    'sick': {
        type: Boolean,
        require: true
    },
    'diagnosis': {
        type: Boolean,
        require: true
    },
},{'collection' : 'radiog',timestamps: true});

export default mongoose.model('radiographies', RadioSchema)