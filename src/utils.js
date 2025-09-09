// Simple utility functions for the pipeline demo
export function add(a, b) {
  return a + b
}

export function multiply(a, b) {
  return a * b
}

export function greet(name) {
  return `Hello, ${name}!`
}

export function calculateCircleArea(radius) {
  if (radius <= 0) {
    throw new Error('Radius must be positive')
  }
  return Math.PI * radius * radius
}

export async function fetchUserData(userId) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`
      })
    }, 100)
  })
}
