// Master Route File
const noteRoutes = require('./note_routes');

module.exports = function(app, db){
    noteRoutes(app, db);
}