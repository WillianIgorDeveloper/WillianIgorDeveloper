import { BaseError, type BaseErrorProps } from "./_base"

export class NotFoundError extends BaseError {
  constructor({ message = "Resource not found", code = "NOT_FOUND" }: BaseErrorProps) {
    super({ message, code })
  }
}
