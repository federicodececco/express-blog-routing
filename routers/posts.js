const express = require("express");
const router = express.Router();

let arr = [
  {
    title: "Ciambellone",
    content: "Tante cose belle",
    img: `http://localhost:3000/images/ciambellone.jpeg`,
    tags: ["torta"],
  },
  {
    title: "Cracker alla Barbabietola",
    content: "Un po' di cose belle",
    img: `http://localhost:3000/images/creacker_barbabietola.jpeg`,
    tags: ["pasta", "pizza", "mandolino"],
  },
  {
    title: "Pane firtto dolce",
    content: "Nessuna cosa bella",
    img: `http://localhost:3000/images/pane_fritto_dolce.jpeg`,
    tags: ["pane", "zucchero"],
  },
  {
    title: "Pasta alla Barbabietola",
    content: "Some cose belle",
    img: `http://localhost:3000/images/pasta_barbabietola.jpeg`,
    tags: ["barbabietola", "pasta"],
  },
  {
    title: "Torta Paesana",
    content: "Any belle cose",
    img: `http://localhost:3000/images/torta_paesana.jpeg`,
    tags: ["torta"],
  },
];

//index
router.get("/", (rq, res) => {
  res.json({
   title:"Lista dei Post",
   posts:arr
  });
});
//show
router.get("/:id", (req, res) => {
  res.json(arr[req.params.id]);
});
//create
router.post("/", (req, res) => {
  res.send("Creazione del post");
});
//
router.put("/:id", (req, res) => {
  res.send("");
});
//modify
router.patch("/:id", (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
});
//destroy
router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});
module.exports = router;
