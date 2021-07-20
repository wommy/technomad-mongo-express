import mongoose from 'mongoose'
import dotenv from './env'

export default async function (){
	try {
		const conn = await mongoose.connect(dotenv.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		})
		console.log(`mongoDB connected: ${conn.connection.host}`)
	} catch (e){ console.error(e) }
}
