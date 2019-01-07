import * as graphql from 'graphql';

export const RadiogType = new graphql.GraphQLObjectType({
    name:"Radiographies",
    description:"Radiographies in MondoDB",
    fields: () => ({
        id:{
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        area: {
            type: graphql.GraphQLString
        },
        sick: {
            type: graphql.GraphQLBoolean
        },
        diagnosis: {
            type: graphql.GraphQLBoolean
        }
    })
});

export const RadiogInputType = new graphql.GraphQLInputObjectType({
    name:"RadiogInput",
    description: "Insert Radiography",
    fields: () => ({
        area: {
            type: graphql.GraphQLString
        },
        sick: {
            type: graphql.GraphQLBoolean
        },
        diagnosis: {
            type: graphql.GraphQLBoolean
        }
    })
});