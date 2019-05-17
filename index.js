var http = require('http')
var fs = require('fs')
var url = require('url')



http.createServer(function(req, res){

  var pathObj = url.parse(req.url, true)
  console.log(pathObj)

  switch (pathObj.pathname) {
    case '/msi':
      var ret
      if(pathObj.query.team == 'IG'){
        ret = {
          from: 'LPL',
          star: 'Jackeylove'
        }
      }else{
        ret = {
          from: pathObj.query.team,
          star: 'Faker'
        }
      }
      res.end(JSON.stringify(ret))
      break;
    case '/user/123':

      res.end( fs.readFileSync(__dirname + '/sample/text.html' ))
      break;
    default:
      res.end( fs.readFileSync(__dirname + '/sample' + pathObj.pathname))
  }
}).listen(8080)