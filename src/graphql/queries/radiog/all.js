import * as graphql from 'graphql';

import Radiog from '../../../Schemas/radiog';
import {RadiogType} from '../../types/Radiog';

const queryAllRadiog = {
    type:new graphql.GraphQLList(RadiogType),
    resolve(){
        const radiogs = Radiog.find().exec()
        if(!radiogs) throw new Error("Error at fetching all radiographies")
        return radiogs
    }
}

export default queryAllRadiog;