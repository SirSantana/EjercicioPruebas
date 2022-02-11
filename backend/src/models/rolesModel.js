import mongoose from "mongoose";

const RolesSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

const RolesModel = mongoose.model("RolesSchema", RolesSchema);

export default RolesModel;
