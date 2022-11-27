
const timeout = (ms, param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(param)
    }, ms);
  })
}

// const test = async () => {
//   const delay1 = await timeout(5000, 'ini 5 detik') //menunggu proses ini kelar terlebih dahulu
//   const delay2 = await timeout(3000, 'ini 3 detik')// baru proses line selanjutnya
//   console.log(delay1)
//   console.log(delay2)
// }
// test()

const test2 = async (ms, param) => {
  const delay = await timeout(ms, param)
  console.log(delay)
}

test2(5000, 'ini 5 detik')
test2(3000, 'ini 3 detik')


// timeout(ms, param).then(dt => console.log(dt)).catch(err => console.log(err))