const express = require('express')
const passport = require('passport')
const router = express.Router()

//GOOGLE
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//GOOGLE AUTH CALLBACK
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)

//LOGOUT
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
