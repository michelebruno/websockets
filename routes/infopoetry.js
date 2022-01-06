const express = require('express');
const infopoetry = express.Router();

let {PythonShell} = require('python-shell')

// middleware that is specific to this router
infopoetry.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
infopoetry.get('/', function (req, res) {

    PythonShell.run('python/infopoetry.py', {
        args: ['ciao'],
        pythonOptions: ['-u'], // get print results in real-time

    }, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);

        res.json(results)
    })

})

module.exports = infopoetry