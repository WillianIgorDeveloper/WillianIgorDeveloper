import { BaseError, type BaseErrorProps } from "./_base"

export class RequestError extends BaseError {
  constructor({ message = "Request failed", code = "REQUEST_ERROR" }: BaseErrorProps) {
    super({ message, code })
  }
}
