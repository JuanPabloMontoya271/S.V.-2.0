import Radiog from '../../../Schemas/radiog';
import {RadiogType, RadiogInputType} from '../../types/Radiog';
import * as graphql from 'graphql';

export default {
    type: RadiogType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            mame: 'data',
            type: new graphql.GraphQLNonNull(RadiogInputType)
        }
    },
    resolve(root,params){
        return Radiog.findByIdAndUpdate(params.id,{$set:{...params.data}})
                        .then((radiog)=> Radiog.findById(radiog.id).exec())
                        .catch((err)=> new Error ('Couldnt update Radiog data'))
    }
}