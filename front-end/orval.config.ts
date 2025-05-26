import { defineConfig } from 'orval';

export default defineConfig({
  biblioteca: {
    output: {
      client: 'angular',
      mode: 'tags-split',
      httpClient: 'fetch',
      schemas: 'src/model',
      target: 'src/services/biblioteca.ts',
      baseUrl: 'http://localhost:3000',
      clean: true,
    },
    input: {
      target: 'http://localhost:3000/v3/api-docs',
    },
  },
});
