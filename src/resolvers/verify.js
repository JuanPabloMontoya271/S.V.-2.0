import User from '../Schemas/user';
import jwt from 'jsonwebtoken' ;
import {resolve} from 'url';
import rejects from 'assert';

const secret = 'elpesgei'
const prefixToken = 'JWT';

export const verifyToken = (token) => {
    const [prefix,payload] = token.split(' ')

    let user = null
    if (!payload){
        throw new Error('No TOKEN provided')
    }
    if(prefix !== prefixToken){
        throw new Error('Invalid Header Format')
    }
    jwt.verify(payload,secret,(err,data) => {
        if(err){
            throw new Error('INVALID TOKEN')
        }else {
            user = User.findOne({'_id':data.id}).exec()
            .then(res =>{
                return resolve(res);
            })
            .catch(err => {
                return rejects(err);
            })
        }
    })
    if(!user){
        throw new Error('User does not exist in Database')
    }
}
