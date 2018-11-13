module.exports = (app) => {

/********  Landing **************/
app.get('/api', function(req, res) {
  res.json({message : 'Nexus REST API' , version : 'v1.0.0'});
});
}