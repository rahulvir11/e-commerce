const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = await req.header('AuthToken');
        const verifyUser = jwt.verify(token, process.env.S3_BUCKET);
        if(!verifyUser){
            res.status(400).json({meg:"plase login", success:false})
        }else{
            req.id = verifyUser._id;
            next();
        }
       
    } catch (error) {
        res.status(400).json({error:error.message,message:"plase login",success:false })
    }
}

module.exports = auth;