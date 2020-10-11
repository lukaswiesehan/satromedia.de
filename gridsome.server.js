const fs = require('fs')
const yaml = require('js-yaml')

const landingFile = fs.readFileSync('./content/landing.yml', 'utf8')
const landingData = yaml.safeLoad(landingFile)
const contentProductionFile = fs.readFileSync('./content/content_production.yml', 'utf8')
const contentProductionData = yaml.safeLoad(contentProductionFile)
const influencerManagementFile = fs.readFileSync('./content/influencer_management.yml')
const influencerManagementData = yaml.safeLoad(influencerManagementFile)
const digitalConceptsFile = fs.readFileSync('./content/digital_concepts.yml', 'utf8')
const digitalConceptsData = yaml.safeLoad(digitalConceptsFile)
const onlineMarketingFile = fs.readFileSync('./content/online_marketing.yml', 'utf8')
const onlineMarketingData = yaml.safeLoad(onlineMarketingFile)
const webdesignFile = fs.readFileSync('./content/webdesign.yml', 'utf8')
const webdesignData = yaml.safeLoad(webdesignFile)

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
    const digital_concepts = actions.addCollection({
      typeName: 'DigitalConcepts'
    })
    digital_concepts.addNode(digitalConceptsData)
    const online_marketing = actions.addCollection({
      typeName: 'OnlineMarketing'
    })
    online_marketing.addNode(onlineMarketingData)
    const webdesign = actions.addCollection({
      typeName: 'Webdesign'
    })
    webdesign.addNode(webdesignData)
  })

  api.createPages(({ createPage }) => {

  })
}
