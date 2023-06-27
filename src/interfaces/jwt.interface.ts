import { type Request } from 'express'

export interface JwtDecoded {
  user_type: string
  user_id: number
  iat: number
  exp: number
}

export interface RequestExt extends Request {
  userData?: JwtDecoded
}
/* import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface RequestExt extends Request {
  user?: JwtPayload | { id: string };
} */
