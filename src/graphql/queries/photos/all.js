import * as graphql from 'graphql';

import Photos from '../../../Schemas/photos';
import {PhotosType} from '../../types/Photos';

const queryAllPhotos = {
    type:new graphql.GraphQLList(PhotosType),
    resolve(){
        const photos = Photos.find().exec()
        if(!photos) throw new Error("Error at fetching photos")
        return photos
    }
}

export default queryAllPhotos;