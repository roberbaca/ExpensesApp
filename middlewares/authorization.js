const jwt = require("jsonwebtoken");

// middleware para autenticar el usuario
const userLoggedIn = async (req, res, next) => {

    const tokenHeader = req.headers["authorization"];
    if(!tokenHeader) {
        res.status(401).json({message: "Unauthorized, provide a token"});      
        return;
    }
    
    const token = tokenHeader.split(" ")[1];
    
    try {
        const data = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY)  
        req.user = {
            id: data.id,            
            email: data.email,           
        }                 
        next();         

    } catch (e) {
        res.status(403).json({message: "Forbidden", error: e});    
        return; 
    }   
}

module.exports = { userLoggedIn }