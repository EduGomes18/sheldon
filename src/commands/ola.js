const command = {
  name: 'ola',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Ola meu caro Leonard!')
    print.error(`ops me enganei, deve ser o seu nivel intelectual...`)
  }
}

module.exports = command
