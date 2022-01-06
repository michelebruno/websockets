const express = require('express');
const infopoetry = express.Router();

// middleware that is specific to this router
infopoetry.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
infopoetry.get('/', function (req, res) {
    res.json({
        connected: 'ok'
    })
})

module.exports = infopoetry