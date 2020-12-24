import {RoomService} from '@apps/api/services/RoomService';
import { convertDocumentsToPlainObjects } from '@tools/persistency/utilities';

export class RoomController {

    static async createRoom(obj, args, context) {
        const room = await RoomService.createRoom({
            name: args['input']['name'],
        });
        return room.toPlainObject();
    }

    static async getRooms(obj, args, context) {
        return convertDocumentsToPlainObjects(
            await RoomService.getRooms(),
        )
    }

    static async updateRoom(obj, args, context) {
        const room = await RoomService.getRoomById(args['input']['id']);
        if (!room) {
            throw new Error(`The room you are trying to update cannot be found.`);
        } else {
            if (args['input']['name']) {
                await RoomService.updateRoomName(room, args['input']['name']);
            }
            return room.toPlainObject();
        }
    }

}