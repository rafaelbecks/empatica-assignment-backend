
export const queriesResolver = {

  async getAppDownloads (parents, { query }, context) {
    const { AppDownload, App } = context.models
    const appDownloads = await AppDownload.findAll({
      include: [{
        model: App, required: true, as: 'app'
      }]
    })
    return appDownloads
  },

  async getAvailableApps (parents, { query }, context) {
    const { App } = context.models
    const apps = await App.findAll();
    return apps
  }

}
