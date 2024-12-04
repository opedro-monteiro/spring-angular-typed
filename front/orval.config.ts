import { defineConfig } from 'orval';

export default defineConfig({
  biblioteca: {
    output: {
      biome: true,
      client: 'angular',
      mode: 'tags-split',
      httpClient: "fetch",
      schemas: 'src/api/model',
      tsconfig: './tsconfig.app.json',
      target: 'src/api/endpoints/petstoreFromFileSpecWithTransformer.ts',
    },
    input: {
      target: 'http://localhost:3000/v3/api-docs',
      override: {
        transformer: 'src/api/transformer/add-version.js',
      },
    },
  },
});


/*
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

*/
