const axios = require('axios')
const fs = require('fs')
const config = require('./config.json')

const download = async (url, track_name) => {
    escaped_track_name = track_name.replace('/', '')
    const path = `${config.download_dir}${escaped_track_name}.mp3`
    const writer = fs.createWriteStream(path)
    const resp = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })
    resp.data.pipe(writer)
    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
      })
}


module.exports = {
    download
}
