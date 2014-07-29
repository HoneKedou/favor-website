/**
 * Created by tsq on 14-7-18.
 */
var connect = require('connect')
var serveStatic = require('serve-static')
var app = connect();
var port = process.env.NODE_PROT || 20000;
app.use(serveStatic('public/', {'index': ['index.html']}))
app.use(function(req, res){
    res.end('Hello World!\n');
});
app.listen(port);
