export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-23'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skszaCwx7Sbh7O4ldzPxLjCz8etqqtE7uJayaAaw7XBOhjILnomO4l0B82P4dGQQp8JhSY3oTzNJBwrD9asJuLMICjm4R11J3B2qs5gvg7fjpiDM8ZJbBWDLK2iHryy6i0HXTQPlUdJelhWUsJhpmi2ARISLXMUQ6xDuMhFySlbWz5g6pY3q",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
