import Photo from '../../../Schemas/photos';
import {PhotosType, PhotosInputType} from '../../types/Photos';
import * as graphql from 'graphql';

export default {
    type: PhotosType,
    args:{
        id:{
            name:'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(PhotosInputType)
        }
    },
    resolve(root,params){
        return Photo.findByIdAndUpdate(params.id,{set:{...prams.data}})
                        .then((photo)=> Photo.findById(photo.id).exec())
                        .catch((err)=> new Error('Couldnt update Photo data'))
    }
}