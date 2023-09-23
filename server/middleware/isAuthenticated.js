const jwt = require('jsonwebtoken')
const {SECRET} = process.env

module.exports = { 
    isAuthenticated: (req, res, next) => {
        const headerToken = req.get('Authorization') //saving the authorization header into the variable headerToken. 

        if (!headerToken) { 
            console.log('ERROR IN auth middleware')
            res.sendStatus(401)
        }

        let token

        try { 
            token = jwt.verify(headerToken, SECRET) 
        } catch (err) {
            err.statusCode = 500 // if error send 500 code and throw error. 
            throw err // - will crash server if it errors.
        }

        if (!token) { 
            const error = new Error('Not authenticated.')
            error.statusCode = 401
            throw error
        }

        next() 
    }
}