const rp = require('request-promise');
const url = require('url');
require('now-logs')('secerectpasswordforxkcdslack')
module.exports = request => {
  
  const query = url.parse(request.url, true).query

  //1800 is a hack. not sure how to get a total count except by checking https://www.explainxkcd.com/wiki/index.php/List_of_all_comics_(full)
  // maybe with cheerio or some scraper but nothing safe 
  if (!query.text) {
    query.text =  Math.floor(Math.random() * (1800 - 1 + 1)) + 1;
  }

  const options = {
      uri: 'https://xkcd.com/'+query.text+'/info.0.json',
      headers: {
          'User-Agent': 'Request-Promise'
      },
      json: true
  };

  const req = rp(options)
      .then(function (comic) {
        console.log(comic);
        const content = {
            "parse": "full",
            "response_type": "in_channel",
            "text": comic.safe_title + ': ' + comic.alt,
            "attachments":[
                {
                    "image_url": comic.img
                }
            ],
            "unfurl_media":true,
            "unfurl_links":true
        }
        return content;
      })
      .catch(function (err) {
          return err;
      });
      
  return req;
}
