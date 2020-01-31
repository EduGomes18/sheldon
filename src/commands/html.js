const command = {
  name: 'html',
  run: async toolbox => {
    const { print, parameters } = toolbox
    let fs = require('fs')

    fs.readFile('nov.html', 'utf8', function(err, data) {
      let result = data
      let teste = JSON.stringify(result)

      var res = teste.replace('<tr>', '<td>')

      console.log(res)
    })

    // fs.writeFileSync('index.html', teste)
  }
}

module.exports = command
