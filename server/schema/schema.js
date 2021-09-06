import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    type Author {
        id: ID!
        name: String
        age: Int
        books: [Book]
    }

    # ROOT TYPE
    type Query {
        books: [Book]
        authors: [Author]
    }
`;

export default typeDefs;
