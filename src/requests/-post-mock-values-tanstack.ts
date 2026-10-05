import { httpRequest } from "./_base"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { RequestError } from "@/shared/errors/request"

namespace usePostMockedValues {
  export type Params = {
    values: Array<{ id: number; name: string }>
  }
  export type Response = {
    success: boolean
  }
}

export function usePostMockedValues() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (params: usePostMockedValues.Params) => {
      const result = await httpRequest<usePostMockedValues.Response>({
        service: "MAIN",
        method: "POST",
        path: "/api/mock-values",
        body: params
      })
      if (!result.success) throw new RequestError({})
      return result.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getMockedValues"] })
    }
  })
}
