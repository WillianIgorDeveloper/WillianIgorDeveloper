import { httpRequest } from "./_base"
import { useSuspenseQuery } from "@tanstack/react-query"
import { RequestError } from "@/shared/errors/request"

namespace useGetMockedValuesSuspense {
  export type Response = {
    values: Array<{ id: number; name: string }>
  }
}

export function useGetMockedValuesSuspense() {
  return useSuspenseQuery({
    queryKey: ["getMockedValuesSuspense"],
    staleTime: Infinity,
    queryFn: async () => {
      const result = await httpRequest<useGetMockedValuesSuspense.Response>({
        service: "MAIN",
        method: "GET",
        path: "/api/mock-values"
      })
      if (!result.success) throw new RequestError({})
      return result.data
    }
  })
}
