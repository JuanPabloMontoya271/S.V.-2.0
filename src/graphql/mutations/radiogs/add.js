import Radiog from '../../../Schemas/radiog';
import {RadiogType, RadiogInputType } from '../../types/Radiog';
import * as graphql from 'graphql';

export default {

    type: RadiogType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(RadiogInputType)
        }
    },
    resolve(root, params){
        const radiog = new Radiog(params.data)
        const newRadiog = radiog.save();
        if(!newRadiog) throw new Error("Error at creating Radiog")
        return newRadiog
    }
}