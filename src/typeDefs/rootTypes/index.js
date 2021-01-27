export const rootTypesDef = `
scalar DateTime

type App {
  id: String
  name: String
  displayName: String
  packageName: String
  platform: String
}

type AppDownload {
  app: App
  latitude: Float
  longitude: Float
  downloadedAt: DateTime
}
`
