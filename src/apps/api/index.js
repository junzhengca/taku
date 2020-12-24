import {HttpServer} from '@tools/httpserver/HttpServer';
import {initializePersistency} from '@tools/persistency';
import {gql} from 'apollo-server-express';
import {RoomController} from '@apps/api/controllers/RoomController';
import dotenv from 'dotenv';

dotenv.config();

const server = new HttpServer({
    port: 5000,
    gqlSupport: true,
    gqlSchema: gql`
        type Query {
            rooms: [Room]
        }

        type Mutation {
            createRoom(input: CreateRoomInput!): Room!
            updateRoom(input: UpdateRoomInput!): Room!
            deleteRoom(input: DeleteRoomInput!): Boolean!
        }

        type Room {
            id: String!
            name: String!
        }

        input CreateRoomInput {
            name: String!
        }

        input UpdateRoomInput {
            id: String!
            name: String
        }

        input DeleteRoomInput {
            id: String!
        }
    `,
    gqlResolvers: {
        Query: {
            rooms: RoomController.getRooms,
        },
        Mutation: {
            createRoom: RoomController.createRoom,
            updateRoom: RoomController.updateRoom,
            deleteRoom: RoomController.deleteRoom,
        }
    }
});

server.start();
initializePersistency();
