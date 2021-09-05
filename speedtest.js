const execSync = require('child_process').execSync;

function speedtest(){
    const output = execSync('speedtest -f json-pretty', { encoding: 'utf-8' });
    return output
}

module.exports = speedtest
