const express = require("express");

const app = express();
const PORT = 3030;

let recipes = [
  {
    id: 01,
    title: "Torta della nonna",
    cooking_time: "40 Min",
    ingredients: "3 uova, 2 bicchieri di zucchero, 1 bicchiere di latte, 1 bicchiere di olio di semi, 3 bicchieri di farina 00, 1 bustina di lievito vanigliato per dolci, scorza grattugiata di un limone",
    preparation: "Sbatti le uova con lo zucchero, aggiungi in ordine: il latte, l'olio, la farina setacciata e mescolata con il lievito, la scorza di limone. Amalgama il tutto fino a creare un composto omogeneo. Fodera una teglia del diamento di 24 cm con della carta forno, versa il composto nella teglia e metti in forno preriscaldato a 180° per circa 40 minuti, o finchè la superficie non diventa dorata. Al posto del limone è possibile aggiungere un altro ingrediente a scelta come le gocce di cioccolato fondente.",
    image_url: "https://blog.giallozafferano.it/cuochinprogress/wp-content/uploads/2020/07/torta-paradiso-nuova-1-600x800.jpg"
  },
];

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
    <h1 style="text-align: center">Il mio libro di ricette</h1>
    <div class="buttons" style="display:flex; flex-direction:row; justify-content:center; gap:10px;" >
        <button style="padding:10px; border-radius:6px; border:none; background-color:#2b2b2b;"><a href="/add-recipe" alt="Aggiungi una ricetta" class="btn" style="color:#fff; text-decoration:none;">Aggiungi una ricetta</a></button>
        <button style="padding:10px; border-radius:6px; border:none; background-color:#2b2b2b;"><a href="/recipes-list-json" alt="Vedi la lista delle ricette (JSON)" class="btn" style="color:#fff; text-decoration:none;">Vedi la lista delle ricette (JSON)</a></button>
    </div>
    <div class="content"><!-- popolare con le ricette! -->
    </div>
    `);
  });

  app.get("/add-recipe", (req, res) => {
  res.send(`
  <div class="form-container" style="width:400px; margin:0 auto;">
        <form action="/api/recipes-list-json" method="POST" style="display:flex; width:400px; flex-direction:column; align-items:center; gap:8px;">
            <input type="text" placeholder="Nome della ricetta..." name="title" style="width:100%; padding:10px; border-radius:6px;" />
            <input type="text" placeholder="Tempi di cottura..." name="cooking_time" style="width:100%; padding:10px; border-radius:6px;" />
            <input type="text" placeholder="Indirizzo dell'immagine..." name="image_url" style="width:100%; padding:10px; border-radius:6px;" />
            <textarea placeholder="Ingredienti..." name="ingredients" rows="4" cols="50" style="width:100%; padding:10px; border-radius:6px;"></textarea>
            <textarea placeholder="Preparazione..." name="preparation" rows="4" cols="50" style="width:100%; padding:10px; border-radius:6px;"></textarea>
            <br />
            <input type="submit" style="width:100%; padding:10px; border-radius:6px; border:none; background-color:#2b2b2b; color:#fff; text-decoration:none;" />
        </form>
    </div>
  `);
});

app.get("/api/recipes-list-json", (req, res, next) => {
  res.json(recipes);
});

app.get("/api/recipes-list-json", (req, res, next) => {
    let sortedData = [...data];
    const sortBy = req.query.sortBy;
    const order = req.query.order;
  
    if (sortBy && order) {
      sortedData.sort((a, b) => {
        if (order === "asc") {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else if (order === "desc") {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
  
    res.json(sortedData);
  });
  

app.post("/api/recipes-list-json", (req, res, next) => {
  const body = req.body;

  if (body.title && body.cooking_time && body.ingredients && body.preparation && body.image_url) {
    movies.push(body);
    res.status(201).send("La ricetta è stata aggiunta correttamente :)");
  } else {
    res.status(400).send(`La struttura dell'oggetto non è valida`);
  }
});

app.delete("/api/recipes-list-json/:id", (req, res, next) => {
  const id = Number(req.params.id);

  recipes = recipes.filter((recipe) => recipes.id !== id);
  res.send("La ricetta è stata rimossa.");
});

app.put("/api/recipes-list-json/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = recipes.findIndex((recipe) => recipe.id === id);

  if (index === -1) {
    res.status(400).send("Non ho trovato la ricetta");
  } else {
    recipes[index] = body;
    res.send("La ricetta è stato modificata!");
  }
});

app.listen(PORT);


