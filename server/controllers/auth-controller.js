const jwt = require("jsonwebtoken");
const userModel = require("../model/user");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const checkExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (checkExist) {
      res.status(401).json({
        success: false,
        message: "user is already exists use another username email",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    if (user) {
      res.status(200).json({
        success: true,
        message: "Register Successfull",
        user,
      });
    }
  } catch (err) {
    res.json("Something wrong");
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    console.log(user)
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User with give username is not found!",
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(401).json({
        success: false,
        message: "Password is Incorrect",
      });
    }

    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },

      process.env.JWT_SECRET_KEY,

      {
        expiresIn: "15m",
      }
    );
    

    return res.status(200).json({
      success: true,
      message: "User is loged in successfully",
      accessToken: accessToken,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something1 went Wrong! Please try again",
      err,
    });
  }
};

module.exports = { register, login };
