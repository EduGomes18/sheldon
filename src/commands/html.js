const command = {
  name: 'html',
  run: async toolbox => {
    const { print, parameters } = toolbox
    let fs = require('fs')

    fs.readFile('nov.html', 'utf8', function(err, data) {
      let result = data
      let teste = JSON.stringify(result)

      let splice = teste.replace(
        /<tr>/g,
        '<table border="0" cellpadding="0" cellspacing="0"> <tr>'
      )
      let splice2 = splice.replace(/<\/tr>/g, '</tr> </table>')
      fs.writeFileSync('index.html', splice2)
    })
  }
}

module.exports = command
