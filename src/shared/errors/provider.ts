import { BaseError } from "./_base"

type ProviderErrorProps = {
  provider: string
  code?: string
}

export class ProviderError extends BaseError {
  constructor({ provider, code = "PROVIDER_ERROR" }: ProviderErrorProps) {
    super({ message: `use${provider} must be used within an ${provider}Provider`, code })
  }
}
