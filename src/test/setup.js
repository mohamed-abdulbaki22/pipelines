// Test setup file for Vitest
import { beforeEach, afterEach } from 'vitest'

// Global test setup
beforeEach(() => {
  // Setup code that runs before each test
  console.log('🧪 Running test setup...')
})

afterEach(() => {
  // Cleanup code that runs after each test
  console.log('✅ Test cleanup completed')
})

// Mock global functions if needed
global.fetch = global.fetch || (() => 
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
)
