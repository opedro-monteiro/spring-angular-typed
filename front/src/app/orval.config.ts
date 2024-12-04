import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "http://localhost:3000/v3/api-docs",
    },
    output: {
      clean: true,
      target: "./src/http/generated/api.ts",
      httpClient: "fetch",
      schemas: 'src/model',
      client: "angular",
      baseUrl: "http://localhost:3000",
      mode: "tags-split",
      biome: true,
    },
  },
});

// [
//   output: {
//     clean: true, // para limpar a pasta de saída a cada mudança
//     mode: 'tags-split',
//     target: 'src/http/generate',
//     schemas: 'src/model',
//     client: 'angular',
//     mock: true,
//   },
// },
// ]
