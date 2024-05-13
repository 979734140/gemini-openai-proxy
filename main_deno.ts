import {app} from "./src/app.ts"

Deno.serve({ port: 8001 }, app.fetch)
