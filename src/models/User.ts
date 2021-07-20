import { Schema, model } from 'mongoose'

interface User {
	googleId: string;
	displayName: string;
	firstName: string;
	lastName: string;
	image?: string
	createdAt?: string;
}

export const UserSchema = new Schema<User>({
	googleId: { type: String, required: true },
	displayName: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	image: { type: String },
	createdAt: { type: Date, default: Date.now }
})

export default model<User>('User', UserSchema)
