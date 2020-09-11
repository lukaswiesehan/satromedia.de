const fs = require('fs')
const yaml = require('js-yaml')

const landingFile = fs.readFileSync('./content/landing.yml', 'utf8');
const landingData = yaml.safeLoad(landingFile);

module.exports = function (api) {
  api.loadSource(async actions => {
    const landing = actions.addCollection({
      typeName: 'Landing'
    })
    landing.addNode(landingData)
  })

  api.createPages(({ createPage }) => {

  })
}
