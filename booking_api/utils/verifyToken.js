import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }
    req.user = user;
    next()
  });
};

//Verifu user
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, (err) => {
      if (err) {
        return next(createError(403, "You are not authorized!"));
      }
  
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };

  //Verify Admin
  export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, (err) => {
      if (err) {
        return next(createError(403, "You are not authorized!"));
      }
  
      if (req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };