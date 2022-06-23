const prisma = require("../utils/client");

const createUser = async (newUser) => {
  try {
    await prisma.user.create(newUser);   
    return newUser;      

  } catch (error) {
    throw new Error("Error creating user");
  }
}

const findUserByEmail = async (email) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        return user;


    } catch (error) {
        throw new Error("Error finding user");
    }
}

module.exports = { createUser, findUserByEmail }


