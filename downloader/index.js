const slider = require('./slider.js')
const system = require('./system.js')

// method used to download a track
const get_track = async track_name => {
    try {
        let track = await slider.get_track_formated(track_name)
        await system.download(track.link, track.track_name)
        console.log(`downloaded: ${track.tit_art} [${track.bitrate}kbits/s]`)
    } catch (e) {
        console.log('could not find this track...')
        throw e
    }
}

// get the first CLI argument
const track_name = process.argv[2]

// download the track
get_track(track_name)
