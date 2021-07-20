import { Schema, model } from 'mongoose'

interface Story {
	title: string;
	body: string;
	status: Enumerator;
	user: Object;
	createdAt?: string;
}

export const StorySchema = new Schema<Story>({
	title: { type: String, required: true, trim: true, },
	body: { type: String, required: true, },
	status: { type: String, default: 'public', enum: ['public','private'], },
	user: { type: Schema.Types.ObjectId, ref: true, },
	createdAt: { type: Date, default: Date.now, },
})

export default model<Story>('Story', StorySchema)
