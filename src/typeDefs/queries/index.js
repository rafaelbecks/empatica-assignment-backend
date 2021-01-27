export const queriesDef = `
type Query {
  getAvailableApps(query: String): [App]
  getAppDownloads(query: String): [AppDownload]
}
`
