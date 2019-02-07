from app import app
from flask import request
import config
import subprocess

@app.route('/download', methods=['POST'])
def download_track():
    message = request.form['message']
    # TODO transform message in track (stripe '/dl')
    track = message
    r = subprocess.check_output(['node', config.DOWNLOADER_PATH, track])
    return r
