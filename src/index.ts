import * as URL from 'url';
import * as HTTP from 'http';
import * as FS from 'fs';

var server = HTTP.createServer(function(request: HTTP.IncomingMessage, response: HTTP.ServerResponse) {
     response.end()
})
server.listen(8080)