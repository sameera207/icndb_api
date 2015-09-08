var request = require('request');

module.exports = {
  random: function(){
    request.get('http://api.icndb.com/jokes/random', function (error, response, body)     {
        if (!error && response.statusCode == 200) {
          console.log(body);
        }
    })
  }
}

request.get("http://api.icndb.com/jokes/random",
    function(error, response, body) {
      j = JSON.parse(body)
      console.log(j['value']['joke'])
    }
)
