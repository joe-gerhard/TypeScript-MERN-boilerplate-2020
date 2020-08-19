import { Schema, model, Document } from 'mongoose';

import { IUser } from '../../@types';

export interface IUserDocument extends Document, IUser {}

const userSchema: Schema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String },
});

export default model<IUserDocument>('User', userSchema);
