import RolesModel from "../models/rolesModel.js";

export const initialSetup = async () => {
  try {
    const count = await RolesModel.estimatedDocumentCount();

    if (count > 0) return;
  
    const values = await Promise.all([
      new RolesModel({ name: "user" }).save(),
      new RolesModel({ name: "moderator" }).save(),
      new RolesModel({ name: "admin" }).save(),
    ]);
    console.log(values)
  } catch (error) {
      console.log(error);
  }
};
