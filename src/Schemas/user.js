import mongoose from 'mongoose'

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    'name': {
        type: String,
        require: true
    },
    'lastName': {
        type:String,
        require: true
    },
    'email': {
        type: String,
        require: true
    },
    'password': {
        type: String,
        require: true
    },
    'birthDate': {
        type: String,
        require: true
    },
},{'collection' : 'users', timestamps: true});


export default mongoose.model('users',UserSchema);