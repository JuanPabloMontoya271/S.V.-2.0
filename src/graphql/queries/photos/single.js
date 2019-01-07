import * as graphql from 'graphql';

import Photos from '../../../Schemas/photos';
import {PhotosType} from '../../types/Photos';

const querySinglePhoto = {

    type: PhotosType,
    args:{
        id:{
            name:'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root, params){
        const photo = Photos.findById(params.id).exec()
        return photo
    }
}

export default querySinglePhoto;