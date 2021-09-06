import { books, authors } from '../data/index.js';
const resolvers = {
    Query: {
        books() {
            return books;
        },
        authors() {
            return authors;
        },
    },
};

export default resolvers;
