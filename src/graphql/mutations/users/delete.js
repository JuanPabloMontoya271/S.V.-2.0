import User from '../../../Schemas/user';
import {UserType} from '../../types/User';
import * as graphql from 'graphql';

export default {
    type: UserType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deleteUser = User.findByIdAndRemove(params.id).exec()
        if(!deleteUser) throw Error("Error on deleting User")
        return deleteUser

    }
}