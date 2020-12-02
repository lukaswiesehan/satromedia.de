const fs = require('fs')
const yaml = require('js-yaml')
const showdown = require('showdown')
const converter = new showdown.Converter()

const landingFile = fs.readFileSync('./content/landing.yml', 'utf8')
var landingData = yaml.safeLoad(landingFile)
const contentProductionFile = fs.readFileSync('./content/content_production.yml', 'utf8')
var contentProductionData = yaml.safeLoad(contentProductionFile)
const influencerManagementFile = fs.readFileSync('./content/influencer_management.yml')
var influencerManagementData = yaml.safeLoad(influencerManagementFile)
const digitalConceptsFile = fs.readFileSync('./content/digital_concepts.yml', 'utf8')
var digitalConceptsData = yaml.safeLoad(digitalConceptsFile)
const onlineMarketingFile = fs.readFileSync('./content/online_marketing.yml', 'utf8')
var onlineMarketingData = yaml.safeLoad(onlineMarketingFile)
const webdesignFile = fs.readFileSync('./content/webdesign.yml', 'utf8')
var webdesignData = yaml.safeLoad(webdesignFile)
const impressumFile = fs.readFileSync('./content/impressum.yml', 'utf8')
var impressumData = yaml.safeLoad(impressumFile)
const datenschutzFile = fs.readFileSync('./content/datenschutz.yml', 'utf8')
var datenschutzData = yaml.safeLoad(datenschutzFile)

module.exports = function (api) {
  api.loadSource(async actions => {
    const landing = actions.addCollection({
      typeName: 'Landing'
    })
    landingData.intro.text = converter.makeHtml(landingData.intro.text)
    landingData.about.description = converter.makeHtml(landingData.about.description)
    landing.addNode(landingData)
    const content_production = actions.addCollection({
      typeName: 'ContentProduction'
    })
    contentProductionData.header.text = converter.makeHtml(contentProductionData.header.text)
    contentProductionData.cta.text = converter.makeHtml(contentProductionData.cta.text)
    content_production.addNode(contentProductionData)
    const influencer_management = actions.addCollection({
      typeName: 'InfluencerManagement'
    })
    influencerManagementData.header.text = converter.makeHtml(influencerManagementData.header.text)
    influencerManagementData.cta.text = converter.makeHtml(influencerManagementData.cta.text)
    influencer_management.addNode(influencerManagementData)
    const digital_concepts = actions.addCollection({
      typeName: 'DigitalConcepts'
    })
    digitalConceptsData.header.text = converter.makeHtml(digitalConceptsData.header.text)
    digitalConceptsData.cta.text = converter.makeHtml(digitalConceptsData.cta.text)
    digitalConceptsData.service.description = converter.makeHtml(digitalConceptsData.service.description)
    digital_concepts.addNode(digitalConceptsData)
    const online_marketing = actions.addCollection({
      typeName: 'OnlineMarketing'
    })
    onlineMarketingData.header.text = converter.makeHtml(onlineMarketingData.header.text)
    onlineMarketingData.cta.text = converter.makeHtml(onlineMarketingData.cta.text)
    online_marketing.addNode(onlineMarketingData)
    const webdesign = actions.addCollection({
      typeName: 'Webdesign'
    })
    webdesignData.header.text = converter.makeHtml(webdesignData.header.text)
    webdesign.addNode(webdesignData)
    const impressum = actions.addCollection({
      typeName: 'Impressum'
    })
    impressumData.company = converter.makeHtml(impressumData.company)
    impressumData.contact = converter.makeHtml(impressumData.contact)
    impressum.addNode(impressumData)
    const datenschutz = actions.addCollection({
      typeName: 'Datenschutz'
    })
    datenschutzData.content = converter.makeHtml(datenschutzData.content)
    datenschutz.addNode(datenschutzData)
  })

  api.createPages(({ createPage }) => {
    
  })
}
