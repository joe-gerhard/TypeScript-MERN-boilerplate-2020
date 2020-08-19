import mongoose from 'mongoose';
import keys from './keys';

mongoose.connect(keys.mongo.databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB');
});

export default mongoose;
