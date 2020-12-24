export class Document {
    
    constructor(model, mongooseDocument) {
        this._model = model;
        this._mongooseDocument = mongooseDocument;
    }

    async getField(name) {
        return this._mongooseDocument[name];
    }

    async setField(name, value) {
        this._mongooseDocument[name] = value;
    }

    async save() {
        await this._mongooseDocument.save();
    }

    toPlainObject() {
        const result = {};
        for (const key in this._model.getSchema()) {
            result[key] = this._mongooseDocument[key];
        }
        result['id'] = this._mongooseDocument._id;
        return result;
    }

}