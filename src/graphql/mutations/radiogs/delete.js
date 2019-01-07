import Radiog from '../../../Schemas/radiog';
import {RadiogType} from '../../types/Radiog';
import * as graphql from 'graphql';

export default {
    type: RadiogType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deleteRadiog = Radiog.findByIdAndRemove(params.id).exec()
        if(!deleteRadiog) throw Error("Error on deleting radiography, please check again the id")
        return deleteRadiog
    }
}