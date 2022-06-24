const bcrypt = require("bcrypt");
const users = require("../models/users");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;        
        const password = req.body.password;        
        
        if (!validPassword(password)){
            res.status(400).json({message: "Invalid password"});
            return;
        }            
        
        if (await userWithEmailExists(email)) {
            res.status(400).json({message: "Email already exists"});
            return;
        }        
        
        const hash = await bcrypt.hash(password, 10);
        const newUser = await users.createUser(name, email, hash);
        res.send(newUser);
        res.json("User created");
        return;

    } catch(error) {
        res.status(500).json({message: error.message});
        return;
    }   
}



const loginUser = async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;        
    const password = req.body.password;    
    const user = await users.findUserByEmail(email); // buscamos el usuario por email  

    if (user){
        const result = await bcrypt.compare(password, user.password);
        if(result){
            const accessToken = jwt.sign({    
                id: user.id,             
                name: user.name,
                email: user.email,

            }, process.env.ACCESS_TOKEN_SECRET_KEY);
            res.json({accessToken: accessToken});
            return;
        }
    }
    res.status(403).json({ message: "Email or password not valid" });
}

const logoutUser = async (req, res) => {
    res.json("Logout");
}


const getUserId = async (req, res) => {   
    try {
        const email = req.body.email;    
        const user = await users.findUserByEmail(email);
        res.json({userId: user.id});
        return user !== null;
    } catch(error) {
        throw new Error("Error finding user");
    }
  
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

module.exports = { loginUser, logoutUser, registerUser, getUserId }


