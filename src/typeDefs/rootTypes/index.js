export const rootTypesDef = `
scalar Coordinates
scalar DateTime

type PointGeometry {
  type: String
  coordinates: Coordinates
}

type Pagination {
  perPage: Int
  pages: Int
  page: Int
  items: Int
}

type App {
  id: String
  name: String
  displayName: String
  packageName: String
  platform: String
}

type AppDownload {
  app: App
  location: PointGeometry
  downloadedAt: DateTime
}

type AppSearchResult {
  pagination: Pagination
  results: [App]
}
type AppDownloadSearchResult {
  pagination: Pagination
  results: [AppDownload]
}
`
