const userSchemaModel = require("../models/userModel");

const registerUser = async (req, res) => {
  //  But Best Practice:
  // Keep it inside the try block to catch any unexpected errors, especially if:
  // req.body might be undefined or null (e.g., bad request, body-parser not working, etc.).
  // You want to safely destructure without risking a runtime crash.

  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;

    if (!firstName || !lastName || !username || !password) {
      // It means: "if firstName is falsy (empty, null, undefined, etc), then do something."
      return res
        .status(400)
        .json({ status: false, message: "All feilds required" });
    }

    const existingUser = await userSchemaModel.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ status: false, message: "username already exists" });
    }

    const newUser = await userSchemaModel.create({
      firstName,
      lastName,
      username,
      password,
    });
    console.log("User saved:", newUser);
    res.status(201).json({ status: true, user: newUser });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userSchemaModel.findOne({ username });
    
    //const user = await userSchemaModel.findOne({ username: "anil123" });

    console.log(user);

    //    user =  {
    //   _id: new ObjectId('684bd5948ff10ee54c364ad2'),
    //   firstName: 'ganesh',
    //   lastName: 'patidar',
    //   username: 'jai ho',
    //   password: '1234',
    //   __v: 0
    // }

    if (!user) {
      return res.status(401).json({ status: false, message: "Invalid credentials" });
    }

    // Compare plain text passwords
    if (password !== user.password) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid credentials" });
    }

    res.status(200).json({ status: true, message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = { registerUser, loginUser };
