module.exports = {
    name: 'tenmancount',
    description: "this is a ten man count command!",
    execute(voiceChannel, channel) {
        if(voiceChannel.members.size == 8) {
            channel.send('10 man need 2');
        }
        else if (voiceChannel.members.size == 9) {
            channel.send('10 man need 1');
        }
        else if (voiceChannel.members.size == 10) {
            channel.send('10 man queue queue queue!!!!');
        }
    }
}