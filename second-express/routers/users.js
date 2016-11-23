module.exports = function(app) {
  var users = [
    {id: "1", name: "John Doe", email: "john@gmail.com"},
    {id: "2", name: "Sam Kim" , email: "Samm@gmail.com"},
    {id: "3", name: "Ura Joe", email: "ura@gmail.com"},
    {id: "4", name: "Nina Micel", email: "nina@gmail.com"},
    {id: "5", name: "Annei", email: "annei@gmail.com"},
    {id: "6", name: "John Park", email: "park@gmail.com"},
    {id: "7", name: "Joana Bros", email: "bros@gmail.com"},
    {id: "8", name: "Jane", email: "jane@gmail.com"},
    {id: "9", name: "Choi", email: "choi@gmail.com"},
    {id: "10", name: "Jessi", email: "jessi@gmail.com"},
  ];

  // response > json data type
  app.get('/users', function(req, res) {
    res.json(users);
  });

  // response > random User object
  app.get('/users/random', function(req, res){
    var num   = Math.floor(Math.random() * users.length);
    var user  = users[num];
    res.json(user);
  });
}