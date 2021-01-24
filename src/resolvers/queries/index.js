// import { Apps, AppDownloads } from '../../models/'

export const queriesResolver = {

  async appDownloadsSearch (parents, { query, type, perPage, page }, context) {
    // const regexCriteria = { $regex: `.*${query}.*`, $options: 'i' }
    // const appDownloads = await AppDownloads.find({ name: regexCriteria })
    // return { results: appDownloads }
  },

  async appSearch (parents, { query }, context) {
    // const regexCriteria = { $regex: `.*${query}.*`, $options: 'i' }
    // const apps = await Apps.find({ name: regexCriteria })
    // return { results: apps }
  }

}
