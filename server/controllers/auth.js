const jwt = require("jsonwebtoken");

const User = require("../models/user");

const signToken = (userId) => jwt.sign(userId, process.env.JWT_SECRET);

exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  const existing_user = await User.findOne({ username: username });

  if (existing_user) {
    return res.status(400).json({
      status: "error",
      message: "Username already exists",
    });
  } else {
    const new_user = await User.create({
      username: username,
      password: password,
    });
    const token = signToken(user._id);

    res.status(200).json({
      status: "success",
      message: "User created successfully",
      token,
    });
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      status: "error",
      message: "Please provide username and password",
    });
  }

  const user = await User.findOne({ username: username }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(400).json({
      status: "error",
      message: "Invalid username or password",
    });
  }

  const token = jwt.signToken(userDoc._id);

  res.status(200).json({
    status: "success",
    message: "Logged in successful",
    token,
  });
};

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(400).json({
      status: "error",
      message: "You are not logged in! Please log in to get access",
    });
    return;
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const this_user = await User.findById(decoded.userId);

  if (!this_user) {
    return res.status(400).json({
      status: "error",
      message: "The user doesnt exist",
    });
  }

  req.user = this_user;
  next();
};
