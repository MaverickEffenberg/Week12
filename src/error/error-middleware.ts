import { Request, Response, NextFunction } from "express";
import { ResponseError } from "./response-error";

export function errorMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ResponseError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error("Unexpected error:", err);
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}
