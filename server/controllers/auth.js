import { db } from "../db.js";
import bcrypt from "bcryptjs";
export const Register = (req, res) => {
  console.log(req.body);
  // Check if the user already exists
  const q = "SELECT * FROM user WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err); // Return server error if query fails
    if (data.length) return res.status(409).json("User already exists!");

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Insert the new user into the database
    const insertQuery =
      "INSERT INTO user (`username`, `password`, `email`) VALUES (?, ?, ?)";
    const values = [req.body.username, hash, req.body.email]; // Correct order: username, hashed password, email
    db.query(insertQuery, values, (err, data) => {
      if (err) return res.status(500).json(err); // Return server error if insertion fails
      return res.status(200).json("User has been created successfully.");
    });
  });
};
export const Login = (req, res) => {
  res.json("login controller post");
};

export const Logout = (req, res) => {
  res.json("Logout controller post");
};
