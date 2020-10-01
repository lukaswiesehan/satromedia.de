const fs = require('fs')
const yaml = require('js-yaml')

const landingFile = fs.readFileSync('./content/landing.yml', 'utf8')
const landingData = yaml.safeLoad(landingFile)
const contentProductionFile = fs.readFileSync('./content/content_production.yml', 'utf8')
const contentProductionData = yaml.safeLoad(contentProductionFile)
const influencerManagementFile = fs.readFileSync('./content/influencer_management.yml')
const influencerManagementData = yaml.safeLoad(influencerManagementFile)

module.exports = function (api) {
  api.loadSource(async actions => {
    const landing = actions.addCollection({
      typeName: 'Landing'
    })
    landing.addNode(landingData)
    const content_production = actions.addCollection({
      typeName: 'ContentProduction'
    })
    content_production.addNode(contentProductionData)
    const influencer_management = actions.addCollection({
      typeName: 'InfluencerManagement'
    })
    influencer_management.addNode(influencerManagementData)
  })

  api.createPages(({ createPage }) => {

  })
}
