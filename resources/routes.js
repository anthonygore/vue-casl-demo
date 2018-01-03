const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs");

let posts = [
  {
    user: 1,
    content: '1 used cat, good condition'
  },
  {
    user: 2,
    content: 'Second hand bathroom wallpaper'
  }
];

let users = [
  {
    id: 1,
    name: 'Jeff',
    active: false
  },
  {
    id: 2,
    name: 'George',
    active: true
  }
];

const defineAbilitiesFor = require( './ability');
let activeUser = users.find(user => user.active);
let ability = defineAbilitiesFor(activeUser.id);

router.get("/", (req, res) => {
  let doc = fs.readFileSync(path.join(__dirname, "../index.html"), 'utf8');
  doc = doc.replace('__DATA__', JSON.stringify({ posts, users }).replace(/"/g, '\\"'));
  res.end(doc);
});

router.get("/delete/:id", (req, res) => {
  let post = posts.find(post => post.user === parseInt(req.params.id));
  if (ability.can('delete', post)) {
    posts = posts.filter(cur => cur !== post);
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;
