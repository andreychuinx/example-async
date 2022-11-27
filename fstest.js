const fs = require('fs')

const readData = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

const showData = async () => {
  try {
    const data = await readData('users.json')
    console.log(data, 'ini data')
  } catch(err) {
    console.log('kesini')
    console.log(err)
  }
}

showData()



