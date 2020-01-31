const command = {
  name: 'quantoe',
  run: async toolbox => {
    const { print, parameters } = toolbox

    if (parameters.second === '+') {
      print.success(
        `Essa e muito facil, fica: ${parameters.first + parameters.third}`
      )
    }
  }
}

module.exports = command
