import { Strategy as googleStrategy } from 'passport-google-oauth20'

import dotenv from './env'
import User from '../models/User'

export default async function (passport: any) {
	passport.use( 
		new googleStrategy({
			clientID: dotenv.GOOGLE_CLIENT_ID,
			clientSecret: dotenv.GOOGLE_CLIENT_SECRET,
			callbackURL: '/auth/google/callback'
		}, async (accessToken, refreshToken, profile, done)=> {
			const newUser = {
				googleId: profile.id,
				displayName: profile.displayName,
				firstName: profile.name?.givenName,
				lastName: profile.name?.familyName,
				// image: profile.photos?.values[0]
			}
			try {
				let user = await User.findOne({ googleId: profile.id })
				user
					? done(null, user)
					: done(null, await User.create(newUser) )
			} catch (err) { console.error(err) }
		}
		)
	)
	passport.serializeUser((user:any,done:any)=> done(null, user.id) )
	passport.deserializeUser((id:any,done:any)=> User.findById(id, (err:any,user:any)=> done(err,user)) )
}
