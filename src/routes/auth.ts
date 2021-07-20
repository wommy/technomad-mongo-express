import express from 'express'
import passport from 'passport'

export default express.Router()
// @desc	auth with google
// @route	GET /auth/google
.get('/google', passport.authenticate('google', { scope: ['profile'] }))
// @desc	google auth callback
// @route	GET /auth/google/callback
.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req,res)=> res.redirect('/dashboard') )
// @desc	logout user
// @route	GET /auth/logout
.get('/logout', (req,res)=> { req.logout(), res.redirect('/') })

