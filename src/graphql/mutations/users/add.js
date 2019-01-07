import User from '../../../Schemas/user';
import {UserType, UserInputType } from '../../types/User';
import * as graphql from 'graphql';

export default {

    type: UserType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(UserInputType)
        }
    },
    resolve(root,params){
        const user = new User(params.data)
        const newUser = user.save();
        if(!newUser) throw new Error("Error at creatin new User")
        return newUser
    }
}