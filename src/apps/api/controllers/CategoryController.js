import {CategoryService} from '@apps/api/services/CategoryService';
import {convertDocumentsToPlainObjects} from '@tools/persistency/utilities';

export class CategoryController {

    static async createCategory(obj, args, context) {
        const category = await CategoryService.createCategory({
            name: args['input']['name']
        });
        return category.toPlainObject();
    }

    static async getCategories(obj, args, context) {
        return convertDocumentsToPlainObjects(
            await CategoryService.getCategories(),
        );
    }

    static async updateCategory(obj, args, context) {
        const category = await CategoryService.getCategoryById(args['input']['id']);
        if (!category) {
            throw new Error(`The category you are trying to update cannot be found.`);
        } else {
            if (args['input']['name']) {
                await CategoryService.updateCategoryName(category, args['input']['name']);
            }
            return category.toPlainObject();
        }
    }

    static async deleteCategory(obj, args, context) {
        const category = await CategoryService.getCategoryById(args['input']['id']);
        if (!category) {
            throw new Error(`The category you are trying to delete cannot be found.`);
        } else {
            await category.delete();
            return true;
        }
    }

}