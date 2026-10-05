import { Server } from "miragejs"
import { serverGetMockValues } from "./get-mock-values"
import { serverPostMockValues } from "./post-mock-values"

const server = new Server({
  routes() {
    this.namespace = "api"
    this.get("/mock-values", serverGetMockValues)
    this.post("/mock-values", serverPostMockValues)
  }
})

export default server
