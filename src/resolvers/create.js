import jwt from 'jsonwebtoken';
import User from '../Schemas/user';

const expiresIn = '1d'
const secret = 'elpesgei'

export const createToken = (email,password) => {
    if(!email || !password){
        return false
    }


const user = User.findOne({'email': email}).then((user) => {
    const compare = new Promise((resolve,reject)=> {
            if(res){
                const payload = {
                    email: user.email,
                    id: user._id
                }

                const token = jwt.sign(payload,secret,{
                    expiresIn
                })

                resolve(token)
            }
            else{
                reject(false)
            }
        })
    return compare
}).catch()
return user
}