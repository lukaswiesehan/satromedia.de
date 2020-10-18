const fs = require('fs')
const yaml = require('js-yaml')
const showdown = require('showdown')
const converter = new showdown.Converter()

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
const impressumFile = fs.readFileSync('./content/impressum.yml', 'utf8')
const impressumData = yaml.safeLoad(impressumFile)
/*const datenschutzFile = fs.readFileSync('./content/datenschutz.yml', 'utf8')
const datenschutzData = yaml.safeLoad(datenschutzFile)
const cookiesFile = fs.readFileSync('./content/cookies.yml', 'utf8')
const cookiesData = yaml.safeLoad(cookiesFile)*/

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
    const impressum = actions.addCollection({
      typeName: 'Impressum'
    })
    impressumData.company = converter.makeHtml(impressumData.company)
    impressumData.contact = converter.makeHtml(impressumData.contact)
    impressum.addNode(impressumData)
    /*const datenschutz = actions.addCollection({
      typeName: 'Datenschutz'
    })
    datenschutz.addNode(datenschutzData)
    const cookies = actions.addCollection({
      typeName: 'Cookies'
    })
    cookies.addNode(cookiesData)*/
  })

  api.createPages(({ createPage }) => {

  })
}
