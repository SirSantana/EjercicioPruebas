import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  roles: [{ ref: "RolesSchema", type: mongoose.Schema.Types.ObjectId }],
},
{
    timestamps:true,
    versionKey:false
});

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;
