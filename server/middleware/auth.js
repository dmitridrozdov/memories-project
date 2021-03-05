import jwt from 'jsonwebtoken'

//click the like button => auth middleware (NEXT) => like controller

const auth = async(req, res, next) => {
    try {
        // console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1]
        const isCustomAuth = token.length < 500
        let decodedData
        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test')
            req.userId = decodedData?.id
        } else {
            decodedData = jwt.decode()
            req.userId = decodedData?.sub
        }
        next()
    } catch(error) {
        console.log(error)
    }
}

export default auth