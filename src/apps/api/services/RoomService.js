import {RoomModel} from '@apps/api/models/RoomModel';

export class RoomService {

    /**
     * Create a new room.
     * @param {!string} name 
     */
    static async createRoom(
        {
            name
        }
    ) {
        return await RoomModel.create({
            name: name,
        });
    }

    /**
     * Get all rooms.
     */
    static async getRooms() {
        return await RoomModel.find({});
    }

    /**
     * Find one room by room ID.
     * @param {!string} roomId 
     */
    static async getRoomById(roomId) {
        return await RoomModel.findById(roomId);
    }

    /**
     * Update room's name.
     * @param {!Document} room 
     * @param {!string} name
     */
    static async updateRoomName(room, name) {
        room.setField('name', name);
        await room.save();
        return room;
    }

}