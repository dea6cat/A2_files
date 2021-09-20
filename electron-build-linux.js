var install = require('electron-linux-installer')
install({
    src: './release-builds/A2-linux-x64', // source location
    dest: './A2-installers', // destination of the installer
    arch: 'x86_64', // x86_x64 would work both debian and rpm cause controllers are here.
    for: 'both' // can be debian or redhat
}).then(success => {
    console.log(success)
}).catch(e => {
    throw e
})