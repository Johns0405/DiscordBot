module.exports = {
    name: 'youtube',
    description: "this is a youtube command!",
    execute(message, args) {
    var search = require('youtube-search');
    const config = require('../config.json');

    var opts = {
    maxResults: 1,
    key: config.YouTubeKey,
    type: 'video'
    };



    search(args.join(' '), opts, function(err, results) {
    if(err) return console.log(err);
    message.channel.send(results[0].link);
    
  });

    }
}