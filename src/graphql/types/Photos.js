import * as graphql from 'graphql';

export const PhotosType = new graphql.GraphQLObjectType({
    name: "Photos",
    description: "Photos in MongoDB",
    fields: () => ({
        _id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        area: {
            type: graphql.GraphQLString
        },
        sick: {
            type: graphql.GraphQLBoolean
        },
        diagnosis: {
            type: graphql.GraphQLString
        }
    })
});

export const PhotosInputType = new graphql.GraphQLInputObjectType({
    name: "PhotosInput",
    description: "Insert Photo",
    fields: () => ({
        area: {
            type: graphql.GraphQLString
        },
        sick: {
            type: graphql.GraphQLBoolean
        },
        diagnosis: {
            type: graphql.GraphQLString
        }
    })
});