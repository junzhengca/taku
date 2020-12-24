import {CategoryModel} from '@apps/api/models/CategoryModel';

export class CategoryService {

    /**
     * Create a new category.
     * @param {!string} name 
     */
    static async createCategory(
        {
            name
        }
    ) {
        return await CategoryModel.create({
            name: name
        });
    }

    /**
     * Get all categories.
     */
    static async getCategories() {
        return await CategoryModel.find({});
    }

    /**
     * Get one category by category ID.
     * @param {!string} categoryId 
     */
    static async getCategoryById(categoryId) {
        return await CategoryModel.findById(categoryId);
    }

    /**
     * Update the name of a category.
     * @param {!Document} category 
     * @param {!string} name 
     */
    static async updateCategoryName(category, name) {
        category.setField('name', name);
        await category.save();
        return category;
    }

}