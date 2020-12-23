import {Model} from '@tools/persistency/Model';

class _RoomModel extends Model {

    getName() {
        return 'Room';
    }

    getSchema() {
        return {
            name: String,
        }
    }

}

export const RoomModel = new _RoomModel();
