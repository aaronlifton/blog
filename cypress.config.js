import { defineConfig } from 'cypress'

export default defineConfig({
projectId: "bw6dh9",
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:4321",
  },
  component: {
    experimentalSingleTabRunMode: true
  },
})
