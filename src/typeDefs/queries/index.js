export const queriesDef = `
type Query {
  appSearch(query: String): AppSearchResult
  appDownloadsSearch(query: String): AppDownloadSearchResult
}
`
