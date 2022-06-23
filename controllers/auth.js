const bcrypt = require("bcrypt");
const users = require("../models/users");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
    try {
        const userBody = req.body;

        if (!validPassword(userBody.password)){
            res.status(400).json({message: "Invalid password"});
            return;
        }
        // validar que el email exista
        // validar que el mail NO exista en la DB        
        if (await userWithEmailExists(userBody.email)) {
            res.status(400).json({message: "Email already exists"});
            return;
        }

        const hash = await bcrypt.hash(userBody.password, 10);

        newUser = {                
            email: userBody.email,
            password: hash            
        }
            
        await users.createUser(newUser);
        res.json("User created");
        return;

    } catch(error) {
        res.status(500).json({message: error.message});
        return;
    }   
}



const loginUser = async (req, res, next) => {
   const userBody = req.body;
   const user = await users.findUserByEmail(userBody.email); // buscamos el usuario por email  

    if (user){
        const result = await bcrypt.compare(userBody.password, user.password);
        if(result){
            const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET_KEY);
            res.json({accessToken: accessToken});
            return;
        }
    }
    res.status(403).json({ message: "Email or password not valid" });
}

const logoutUser = (req, res, next) => {
    res.json("Logout");
}


const userWithEmailExists = async (email) => {
    try {
        const user = await users.findUserByEmail(email);
        return user !== null;
    } catch(error) {
        throw new Error("Error finding user");
    }
}

const validPassword = (password) => {
    return password;
}

module.exports = { loginUser, logoutUser, registerUser }