export class Document {
    
    constructor(model, mongooseDocument) {
        this._model = model;
        this._mongooseDocument = mongooseDocument;
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