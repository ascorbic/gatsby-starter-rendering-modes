const { promises: fs } = require('fs')
exports.onBuild = async () => {
    await fs.copyFile('.cache/query-engine/index.js', 'public/query-engine-original.js')
}

exports.onPostBuild = async () => {
    await fs.copyFile('.cache/query-engine/index.js', 'public/query-engine-patched.js')
}