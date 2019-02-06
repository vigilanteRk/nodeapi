// Master Route File
// bringing all individual route files in index.js
const noteRoutes = require('./note_routes');

module.exports = function(app, db){
    noteRoutes(app, db);
}