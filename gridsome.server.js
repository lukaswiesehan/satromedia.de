const axios = require('axios')
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
    
    try {
      const requests = []
      var responses = []
      for(var influencer of influencerManagementData.influencers) {
        influencer.profileLink = 'https://instagram.com/'
        influencer.fullName = 'Full Name'
        influencer.biography = 'Biography'
        influencer.profilePicture = ''
        influencer.timeline = '00'
        influencer.followers= '00'
        influencer.follows = '00'
        influencer.contactLink = "javascript:mailto('nbjmup;lpoubluAtbuspnfejb/ef', 'Anfrage Influencer @" + influencer.username + "')"
        requests.push(axios.get('https://www.instagram.com/' + influencer.username +'/?__a=1'))
      }
      responses = await Promise.all(requests)
      var i = 0
      for(const influencer of influencerManagementData.influencers) {
        var userData = responses[i].data.graphql.user
        influencer.profileLink = 'https://instagram.com/' + influencer.username
        influencer.fullName = userData.full_name
        influencer.biography = userData.biography.replace(/\n/g, '<br/>')
        influencer.profilePicture = userData.profile_pic_url
        influencer.timeline = userData.edge_owner_to_timeline_media.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        influencer.followers= userData.edge_followed_by.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        influencer.follows = userData.edge_follow.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        influencer.contactLink = "javascript:mailto('nbjmup;lpoubluAtbuspnfejb/ef', 'Anfrage Influencer @" + influencer.username + "')"
        i++      
      }
    } catch(error) {
      console.log(error)
    }
    
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
