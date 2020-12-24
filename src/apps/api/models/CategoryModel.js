import {Model} from '@tools/persistency/Model';

class _CategoryModel extends Model {

    getName() {
        return 'Category';
    }

    getSchema() {
        return {
            name: String,
        }
    }

}

export const CategoryModel = new _CategoryModel();
