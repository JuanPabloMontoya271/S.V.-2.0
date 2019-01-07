import * as graphql from 'graphql';

import Radiog from '../../../Schemas/radiog';
import {RadiogType} from '../../types/Radiog';

const querySingleRadiog = {

    type: RadiogType,
    args:{
        id:{
            name:'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const radiog = Radiog.findById(params.id).exec()
        return radiog
    }
}

export default querySingleRadiog;