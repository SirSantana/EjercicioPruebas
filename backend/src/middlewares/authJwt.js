import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

export const authJwt = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    if (!token) return res.status(403).json({ message: "No provided token" });

    const decoded = jwt.verify(token, "prueba");
    console.log(token);
    req.userId = decoded.id;
    const user = await UserModel.findById(req.userId, { password: 0 });
    if (!user) return res.status(403).json({ message: "El usuario no existe" });
  } catch (error) {
    return res.status(403).json(error);
  }
};


