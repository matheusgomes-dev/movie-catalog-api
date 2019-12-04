const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const enums = require("../enums");

class AuthController {
  async authenticate(req, res) {
    try {
      const { email, pass } = req.body;

      const user = await User.findOne({ email: email });

      if (!user)
        return res
          .status(enums.statusCode.notFound)
          .send({ message: "User not found" });

      const correctPassword = await bcrypt.compare(pass, user.password);

      if (!correctPassword)
        return res
          .status(enums.statusCode.unauthorized)
          .send({ message: "Incorrect password" });

      const token = jwt.sign(
        {
          id: user._id,
          name: user.name
        },
        process.env.APP_SECRET,
        {
          expiresIn: 86400 // one day duration
        }
      );

      res.status(enums.statusCode.success).send({ auth: true, token: token });
    } catch (e) {
      res.status(enums.statusCode.internalError).send({ message: e.message });
    }
  }
}

module.exports = new AuthController();
