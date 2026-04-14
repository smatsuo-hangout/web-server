const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, "public")))

app.post('/api/v1/quiz', (req, res) => {
  const answer = req.body.answer;
  if(answer === "2") {
    return res.redirect("/correct.html");
  } else {
    return res.redirect("/wrong.html");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running')
})