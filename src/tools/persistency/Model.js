import mongoose from 'mongoose';
import {Document} from '@tools/persistency/Document';

/**
 * Abstract class, must implement getName and getSchema
 */
export class Model {

    getName() {
        throw new Error('Not implemented.');
    }

    getSchema() {
        throw new Error('Not implemented.');
    }

    _init() {
        if (!this._model) {
            this._model = mongoose.model(this.getName(), this.getSchema());
        }
    }

    async create(data) {
        this._init();
        const mongooseDocument = new this._model(data);
        await mongooseDocument.save();
        return new Document(this, mongooseDocument);
    }

    async findById(id) {
        this._init();
        const mongooseDocument = await this._model.findOne({_id: id});
        if (mongooseDocument) {
            return new Document(this, mongooseDocument);
        } else {
            return null;
        }
    }

    async find(filter) {
        this._init();
        const mongooseDocuments = await this._model.find(filter);
        const result = [];
        for (const mongooseDocument of mongooseDocuments) {
            result.push(new Document(this, mongooseDocument));
        }
        return result;
    }

}