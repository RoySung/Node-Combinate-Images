'use strict';
console.log(process.version)
const fs = require('fs')
const images = require('images')
const path = require('path')
const root = process.pkg ? src => path.join(path.dirname(process.execPath), src) : src => path.join(__dirname, src)
const rootPath = root('./')
let setting = fs.readFileSync(root('./setting.json'))
setting = JSON.parse(setting.toString())
const { folders } = setting



const foldersFiles = folders.map((folder) => {
  try {
    return fs.readdirSync(root(`assets/${folder}`))
      .filter((file) => {
        // filter file name that isn't includes `.` in first word.
        return !/^\./.test(file)
      })
      .map(file => `assets/${folder}/${file}`)
  } catch(e) {
    return
  }
}).filter((folderFiles) => {
  // remove is not exist.
  return folderFiles
})

const combinations = permuteFromSets(foldersFiles)
console.log(combinations)
combinations.map(combination => mergeImages(combination))


function mergeImages(paths) {
  console.log(paths)
  let tmpPaths = paths.slice(0)
  let canvas = images(tmpPaths.splice(0, 1)[0])
  tmpPaths.forEach((path) => {
    canvas.draw(images(path), 0, 0)
  })

  let resultBuffer = canvas.encode("png", {
    quality: 100
  });

  let fileName = paths.map(path => path.split('.')[0].match(/[^\/]+/g).pop()).join('-')
  fileName += '.png'
  outputFile(root('./assets/output'), fileName, resultBuffer)
}

function permuteFromSets(sets) {
  const result = []
  const lastSetIndex = sets.length - 1
  combine([], 0)
  return result

  function combine(arr, setIndex) {
    sets[setIndex].forEach(set => {
      const tmpArray = arr.slice(0)
      tmpArray.push(set)
      setIndex === lastSetIndex ? result.push(tmpArray) : combine(tmpArray, setIndex + 1)
    })
  }
}

function outputFile(path, fileName, buffer) {
  try {
    fs.writeFileSync(`${path}/${fileName}`, buffer, 'utf8')
    console.log("info: Success, Output file " + fileName);
  } catch (error) {
    console.log('err: ' + error)
  }
}

