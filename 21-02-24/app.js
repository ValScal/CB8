const express = require("express");
const { products } = require("./data");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/brand", (req, res) => {
  const brandNames = products.map((product) => {
    const { id, brand } = product;
    return { id, brand };
  });
  res.json(brandNames);
});

app.get("/products/brand/:brandId", (req, res) => {
  const { brandId } = req.params;
  console.log(req.params);
  const singleBrand = products.find(
    (product) => product.id === Number(brandId)
  );

  if (!singleBrand) {
    return res.status(404).send("Brand non trovato");
  }
  return res.json(singleBrand);
});

app.listen(PORT, () => {
  console.log("server attivo");
});