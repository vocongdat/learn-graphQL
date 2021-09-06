import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

const PORT = 5000;

const startApolloServer = async (typeDefs, resolvers) => {
    const app = express();

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app, path: '/' });
    await new Promise((resolve) =>
        httpServer.listen({ port: process.env.PORT || PORT }, resolve)
    );
    console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
};

// Load schema & resolvers
import typeDefs from './schema/schema.js';
import resolvers from './resolver/resolver.js';

startApolloServer(typeDefs, resolvers);
