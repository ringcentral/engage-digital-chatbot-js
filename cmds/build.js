const { exec, rm, echo } = require('shelljs')
const { resolve } = require('path')

const dist = resolve(__dirname, '../deploy')

echo('building...')
rm('-rf', `${dist}/*.js`)
rm('-rf', `${dist}/*.json`)
exec('babel example-lambda --out-dir deploy --source-maps')
echo('build done')
