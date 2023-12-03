const { response } = require('express')

const testEndpoint = (req, res) => {
    res.json("All good here!")
}

module.exports = {
    testEndpoint
}