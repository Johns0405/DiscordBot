module.exports = {
    name: 'youtube',
    description: "this is a youtube command!",
    execute(message, args) {
    var search = require('youtube-search');

    var opts = {
    maxResults: 1,
    key: 'AIzaSyBy-1ACAI-fGVyuyY7j7xjGIFhSoSTfrEI',
    type: 'video'
    };



    search(args.join(' '), opts, function(err, results) {
    if(err) return console.log(err);
    message.channel.send(results[0].link);
    
  });

    }
}