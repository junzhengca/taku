import mongoose from 'mongoose';
import {Logger} from '@tools/logger/Logger';

export async function initializePersistency() {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            Logger.debug('Persistency layer initialized.');
        });
}