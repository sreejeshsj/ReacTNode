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

module.exports={register}
