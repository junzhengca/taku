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

}