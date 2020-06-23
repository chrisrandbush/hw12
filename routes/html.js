// DEPENDENCIES
const router = require("express").Router();
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

  // HTML GET Requests

router.get("/exercise", function(req, res){
  console.log("exercise works!");
  res.sendFile(path.join(__dirname + '/../public/exercise.html'));
});
router.get("/stats", function(req, res){
  console.log("stats works!")
  res.sendFile(path.join(__dirname + '/../public/stats.html'));
});


module.exports = router;
