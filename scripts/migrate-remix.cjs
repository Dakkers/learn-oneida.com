const fs = require('fs');
const path = require('path');

const PATH_ROOT = path.resolve(__dirname, '..');
const PATH_ONEIDA = path.resolve(PATH_ROOT, 'apps', 'learn-oneida')
const PATH_ROUTES = path.resolve(PATH_ONEIDA, 'app', 'routes')

const PATH_V2_APP = path.resolve(PATH_ROOT, 'apps', 'learn-oneida-v2', 'src', 'app')

const filenames = fs.readdirSync(PATH_ROUTES)
// console.log(filenames)
for (const fn of filenames) {
  const originalFilepath = path.resolve(PATH_ROUTES, fn);

  const [parent, pageName] = fn.split('.');
  if (parent === '_index') {
    continue;
  } else {
    console.log('parent =', parent)
    const parentDirPath = path.resolve(PATH_V2_APP, parent);
    if (!fs.existsSync(parentDirPath)) {
      console.log('creating', parentDirPath)
      fs.mkdirSync(parentDirPath)
    }

    const pagePath = path.resolve(parentDirPath, pageName)
    if (pageName === '_index') {
      createTheDir(pagePath, originalFilepath)
    } else {
      // console.log('\t',pagePath)
      createTheDir(pagePath, originalFilepath)
    }
  }
}

function createTheDir (newPath, originalPath) {
  if (!fs.existsSync(newPath)) {
    fs.mkdirSync(newPath);
  }
  fs.writeFileSync(
    path.resolve(newPath, 'page.tsx'),
    fs.readFileSync(originalPath)
  )
}
