import express from 'express';
import {Logger} from '@tools/logger/Logger';
import {ApolloServer} from 'apollo-server-express';

export class HttpServer {

    constructor(
        {
            port,
            gqlSupport,
            gqlSchema,
            gqlResolvers
        }
    ) {
        this._app = express();
        this._port = port;
        if (gqlSupport) {
            const apolloServer = new ApolloServer({
                typeDefs: gqlSchema,
                resolvers: gqlResolvers,
            });
            apolloServer.applyMiddleware({ app: this._app });
        }
    }

    /**
     * Start the server.
     */
    async start() {
        this._app.listen(this._port, () => {
            Logger.debug(`HTTP server started on port ${this._port}.`);
        });
    }

}