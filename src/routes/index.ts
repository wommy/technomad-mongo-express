import express from 'express'
// import  from '../models/User'
import { auth, guest } from '../middleware/auth'
import Story from '../models/Story'

export default express.Router()
// @desc	login/landing	
// @route	GET /
.get('/', guest, (req,res)=> res.render('login', { layout: 'login' }))
// @desc	dashboard
// @route	GET /dashboard
.get('/dashboard', auth, async (req,res)=> {
	try {
		// const stories = await Story.find({user: req.user.id}).lean(	)
		res.render('dashboard'
		// , { name: req.user.firstName, stories }
		)
	} catch(e){console.error(e)}
	// let name = req.user?.firstName
})

