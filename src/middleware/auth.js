import jwt from 'jsonwebtoken';
const jwtAuth=(req,res,next)=>{
    //1.read the token 
    const token =req.headers['authorization']

    //2. if no token return error
    if(!token){
        return res.status(401).send('unauthorised');
    }
    //3.check if token is valid
    try {
        const payload=jwt.verify(token,process.env.JWT_SECRET);
        req.doctorId=payload.doctorId;
        console.log(payload);
    } catch (error) {
        console.log(error)
        return res.status(401).send('unauthorised');
    }
    
    //4. call next middleware
    next()
}
export default jwtAuth;