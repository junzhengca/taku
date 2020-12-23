import {HttpServer} from '@tools/httpserver/HttpServer';
import {initializePersistency} from '@tools/persistency';
import {gql} from 'apollo-server-express';
import {RoomController} from '@apps/api/controllers/RoomController';

const server = new HttpServer({
    port: 5000,
    gqlSupport: true,
    gqlSchema: gql`
        type Query {
            rooms: [Room]
        }

        type Mutation {
            createRoom(input: CreateRoomInput!): Room!
        }

        type Room {
            id: String!
            name: String!
        }

        input CreateRoomInput {
            name: String!
        }
    `,
    gqlResolvers: {
        Query: {
            rooms: RoomController.getRooms,
        },
        Mutation: {
            createRoom: RoomController.createRoom,
        }
    }
});

server.start();
initializePersistency();
