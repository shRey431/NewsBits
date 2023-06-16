const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {

    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const findUser = await User.findOne({ email: email });

    if (findUser) {
        res.status(400);
        throw new Error("Email ID is already registered!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
    });

    if (newUser) {
        res.status(201).json({ _id: newUser.id, email: newUser.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.firstname,
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

  const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
  });


module.exports = { registerUser , loginUser , currentUser };