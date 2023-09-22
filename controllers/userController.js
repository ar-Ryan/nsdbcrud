const userData = require('./models/userModel')



const loginController = async (request, response) => {
    try {
      encryptanddecrypt.matchPwd();
    } catch (error) {
      response.status(500).json({ message: "Internal Server error" });
    }
  };


const registerController = async (request, response) => {
try {
    const { username, email, password } = request.body;

    const hashPwd = encryptanddecrypt.hashPwd(password);

    const user = await userModel.create({
    email: email,
    username: username,
    password: hashPwd,
    });
    if (user && user._id) {
    response.status(201).json({ message: "User Register successfully" });
    } else {
    response.status(404).json({ message: "User Not Register " });
    }
} catch (error) {
    response.status(500).json({ message: "Internal Server error" });
}
};
  