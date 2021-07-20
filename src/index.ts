import express from 'express'
import morgan from 'morgan'
import exphbs from 'express-handlebars'
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'

import connectDB from './config/db'
import router from './routes'
import authRouter from './routes/auth'
import passportConfig from './config/passport'

import dotenv from './config/env'

// console.log( typeof Date.now )

// passport
passportConfig(passport)

connectDB()

const PORT = dotenv.PORT || 3000
express()

// logging 
// (process.env.NODE_ENV === 'development'){
.use(morgan('dev'))
// } 	

// exphbs
.set('views', `${__dirname}/views`)
.engine('.hbs', exphbs({extname: '.hbs'}))
.set('view engine', '.hbs')

// sessions
.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false,
	store: MongoStore.create({ mongoUrl:dotenv.MONGO_URI})
}))

// passport middleware
.use(passport.initialize())
.use(passport.session())

// static
.use(express.static(`${__dirname}/public`))

// routes
.use('/', router)
.use('/auth', authRouter)

.listen(PORT, ()=> console.log(`#${dotenv.NODE_ENV} port:${PORT}`))
