import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import RolesModel from "../models/rolesModel.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await UserModel.findOne({ email }).populate("roles");
    if (!userExist) return res.status(404).json("El usuario no existe");

    const userConfirm = await bcrypt.compare(password, userExist.password);
    if (!userConfirm) return res.status(500).json("Quedo mal la pass");

    const token = jwt.sign(
      {
        id: userConfirm._id,
      },
      "prueba",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: userConfirm, token });
  } catch (error) {
    res.status(400).json(error);
  }
};
export const signup = async (req, res) => {
  const { nombre, email, password, role } = req.body;

  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) return res.status(500).json("El correo ya esta en uso");

    const passHashed = await bcrypt.hash(password, 12);

    const result = await UserModel.create({
      nombre,
      email,
      password: passHashed,
    });
    if (role) {
      const foundRole = await RolesModel.find({ name: { $in: role } });
      result.roles = foundRole.map((role) => role._id);
    } else {
      const role = await RolesModel.findOne({ name: "user" });
      result.roles = [role._id];
    }

    const savedUser = await result.save();
    console.log(savedUser);
    const token = jwt.sign({ id: savedUser._id }, "prueba", {
      expiresIn: "1h",
    });

    res.status(201).json({ savedUser, token });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
