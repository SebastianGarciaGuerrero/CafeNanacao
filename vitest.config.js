import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        enviroment: 'node',
        globals: true,
        coverage: { reporter: ['html'] }
    }
})