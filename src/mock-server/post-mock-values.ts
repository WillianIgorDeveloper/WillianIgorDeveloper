import type { Registry, Request } from "miragejs"
import type { AnyFactories, AnyModels } from "miragejs/-types"
import type Schema from "miragejs/orm/schema"

export function serverPostMockValues(
  _schema: Schema<Registry<AnyModels, AnyFactories>>,
  request: Request
) {
  const attrs = JSON.parse(request.requestBody)
  console.log("Received data:", attrs)
  return { success: true }
}
