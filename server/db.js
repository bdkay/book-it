var pg = require('pg');

var client = new pg.Client({
  database: 'books-dev'
});

client.connect(function(err){
  if (err) throw err;

  client.query('SELECT * from books', [], function(err, result){
    if (err) throw err;
    console.log(result.rows);

    client.end(function(err){
      if (err) throw err;
    });
  });
})
