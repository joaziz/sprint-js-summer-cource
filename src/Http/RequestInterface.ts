import {Request, Response} from "express";
import {UserModel} from "../Model";

export interface RequestInterface extends Request {
    user: UserModel
}