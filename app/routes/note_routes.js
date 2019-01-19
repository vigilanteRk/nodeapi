var ObjectId = require('mongodb').ObjectID

module.exports = function(app, db){

    // Create
    app.post('/notes', (req, res) => {
        // We'll create the note here
        // Express can't encode URL on it's own. so we use body-parser package
        // console.log(req.body);
        // res.send('Hello, can you listen me.....');  
            const note = { text: req.body.body, title: req.body.title };
            // for below 3.0 : db.collection and above db.db().collection
            db.db().collection('notes').insert(note, (err, result) => {
                if(err){
                    res.send({ 'error': 'An error has occured' });
                } else {
                    res.send(result.ops[0])
                }
            }); 
        });

    
    // Read
    app.get('/notes/:id', (req, res) => {
            const id = req.params.id;
            const details = {'_id': new ObjectId(id) };
            db.db().collection('notes').findOne(details, (err, item) => {
                if(err){
                    res.send({ 'error': 'An error has occured' });
                } else {
                    res.send(item)
                }
            }); 
        });


    // Update    
    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectId(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.db().collection('notes').update(details, note, (err, item) => {
            if(err){
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send(item)
            }
        }); 
    });
        
    
    // Delete
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectId(id) };
        db.db().collection('notes').remove(details, (err, item) => {
            if(err){
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        }); 
    });

    }; 
