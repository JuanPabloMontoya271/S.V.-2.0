import Photo from '../../../Schemas/photos';
import {PhotosType} from '../../types/Photos';
import * as graphql from 'graphql';

export default {
    type: PhotosType,
    args:{
        id:{
            name:'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletePhoto = Photo.findByIdAndRemove(params.id).exec()
        if(!deletePhoto) throw Error("Error on delete")
        return deletePhoto
    }
}