export type BaseErrorProps = {
  message?: string
  code?: string
}

export class BaseError extends Error {
  public readonly code: string
  constructor({ message, code = "INTERNAL_ERROR" }: BaseErrorProps) {
    super(message)
    this.name = this.constructor.name
    this.code = code
  }
}
