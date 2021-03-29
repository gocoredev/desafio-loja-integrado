import { NextFunction, Request, Response } from "express";

declare interface IRequestResponse {
    request: Request;
    response: Response;
    next?: NextFunction;
}