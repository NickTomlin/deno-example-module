export const defaultGreeting = "Greeting"
export function greet (name: string, greeting: string = defaultGreeting) {
  return `${greeting}, ${name}`
}
