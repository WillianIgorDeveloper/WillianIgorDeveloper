import { httpRequest } from "./_base"

namespace GetMockValues {
  export type Response = {
    values: Array<{ id: number; name: string }>
  }
}

export async function getMockValues() {
  const result = await httpRequest<GetMockValues.Response>({
    service: "MAIN",
    method: "GET",
    path: "/api/mock-values"
  })
  console.log(result)
  return result
}
