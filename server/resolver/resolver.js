import { books, authors } from '../data/index.js';
const resolvers = {
    Query: {
        books: () => {
            return books;
        },
        book: (parent, args) =>
            books.find((book) => book.id.toString() === args.id),
        authors: () => {
            return authors;
        },
        author: (parent, args) =>
            authors.find((author) => author.id.toString() === args.id),
    },
    Book: {
        author: (parent, args) => {
            return authors.find((author) => author.id === parent.authorId);
        },
    },
    Author: {
        books: (parent, args) => {
            console.log(parent);
            return books.filter((book) => book.authorId === parent.id);
        },
    },
    Mutation: {
        createAuthor: (parent, args) => args,
        createBook: (parent, args) => args,
    },
};

export default resolvers;
