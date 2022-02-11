const jwt = require('jsonwebtoken')

const auth =async(req, res, next)=>{
    const token = req.headers.authorization.split(" ")[1]

    try {
        let decodedData;
    if(token){
        decodedData =  jwt.verify(token, 'test')
        req.userId = decodedData?.id
    }else{
        decodedData = jwt.decode(token)
        req.userId = decodedData?.sub
    }
    } catch (error) {
        console.log(error);
    }
    next()
}

module.exports = auth