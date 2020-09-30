const fs = require('fs')
const yaml = require('js-yaml')

const landingFile = fs.readFileSync('./content/landing.yml', 'utf8')
const contentProductionFile = fs.readFileSync('./content/content_production.yml', 'utf8')
const landingData = yaml.safeLoad(landingFile)
const contentProductionData = yaml.safeLoad(contentProductionFile)

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
  })

  api.createPages(({ createPage }) => {

  })
}
