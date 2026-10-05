import { httpRequest } from "./_base"
import { useQuery } from "@tanstack/react-query"
import { RequestError } from "@/shared/errors/request"

namespace UseGetMockedValues {
  export type Response = {
    values: Array<{ id: number; name: string }>
  }
}

export function useGetMockedValues() {
  return useQuery({
    queryKey: ["getMockedValues"],
    staleTime: Infinity,
    queryFn: async () => {
      const result = await httpRequest<UseGetMockedValues.Response>({
        service: "MAIN",
        method: "GET",
        path: "/api/mock-values"
      })
      if (!result.success) throw new RequestError({})
      return result.data
    }
  })
}
