import Photo from '../../../Schemas/photos';
import {PhotosType, PhotosInputType } from '../../types/Photos'
import * as graphql from 'graphql';

export default {

    type: PhotosType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(PhotosInputType)
        }
    },
    resolve(root,params){
        const photo = new Photo(params.data)
        const newPhoto = photo.save();
        if(!newPhoto) throw new Error("Error at creating new Photo")
        return newPhoto
    }
}