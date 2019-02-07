const slider = require('./slider.js')
const system = require('./system.js')

// method used to download a track
const get_track = async track_name => {
    try {
        let track = await slider.get_track_formated(track_name)
        await system.download(track.link, track.track_name)
    } catch (e) {
        if (e.message === 'no match')
            console.log(e.message)
        else
            throw e
    }
}

// get the first CLI argument
const track_name = process.argv[2]

// download the track
get_track(track_name)
