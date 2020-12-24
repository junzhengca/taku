import {HttpServer} from '@tools/httpserver/HttpServer';
import {initializePersistency} from '@tools/persistency';
import {gql} from 'apollo-server-express';
import {RoomController} from '@apps/api/controllers/RoomController';
import {CategoryController} from '@apps/api/controllers/CategoryController';
import dotenv from 'dotenv';

dotenv.config();

const server = new HttpServer({
    port: 5000,
    gqlSupport: true,
    gqlSchema: gql`
        type Query {
            rooms: [Room],
            categories: [Category]
        }

        type Mutation {
            createRoom(input: CreateRoomInput!): Room!
            updateRoom(input: UpdateRoomInput!): Room!
            deleteRoom(input: DeleteRoomInput!): Boolean!
            createCategory(input: CreateCategoryInput!): Category!
            updateCategory(input: UpdateCategoryInput!): Category!
            deleteCategory(input: DeleteCategoryInput!): Boolean!
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

        type Category {
            id: String!
            name: String!
        }

        input CreateCategoryInput {
            name: String!
        }

        input UpdateCategoryInput {
            id: String!
            name: String
        }

        input DeleteCategoryInput {
            id: String!
        }
    `,
    gqlResolvers: {
        Query: {
            rooms: RoomController.getRooms,
            categories: CategoryController.getCategories,
        },
        Mutation: {
            createRoom: RoomController.createRoom,
            updateRoom: RoomController.updateRoom,
            deleteRoom: RoomController.deleteRoom,
            createCategory: CategoryController.createCategory,
            updateCategory: CategoryController.updateCategory,
            deleteCategory: CategoryController.deleteCategory,
        }
    }
});

server.start();
initializePersistency();
