var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

//Construct a schema, using GraphQl schema language
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

//The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running GraphQL API server using express on http://localhost:4000/graphql');