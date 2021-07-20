// import * as dotenv from 'dotenv'
import { config } from 'dotenv'

config({ path: `${__dirname}/.env` })

export default {
	PORT: process.env.PORT ?? '',
	NODE_ENV: process.env.NODE_ENV ?? '',
	MONGO_URI: process.env.MONGO_URI ?? '',
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ?? '',
	GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ?? ''
}

