import {RoomModel} from '@apps/api/models/RoomModel';

export class RoomService {

    static async createRoom(
        {
            name
        }
    ) {
        return await RoomModel.create({
            name: name,
        });
    }

    static async getRooms() {
        return await RoomModel.find({});
    }

}