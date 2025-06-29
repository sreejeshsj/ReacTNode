const jwt = require("jsonwebtoken");

const authMiddler = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied, Please Login to continue",
    });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userinfo = decodedToken;
    console.log(req.userinfo.userId)
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something3 went wrong",
    });
  }
};

module.exports=authMiddler