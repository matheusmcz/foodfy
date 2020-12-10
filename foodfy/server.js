const express = require('express')
const nunjuncks = require('nunjucks')

const server = express()
const receitas = require("./data")
const footer = "Todos direitos reservados, receitas Foodfy."

server.use(express.static('public'))
server.use(express.static('layouts/assets'))


server.set("view engine", "njk")

nunjuncks.configure("views", {
  express: server,
  // autoscape permite imprimir HTML
  autoescape: false,
  noCache: true
})

server.get("/", function (req, res) {
  const index = {
    p1: "As melhores receitas",
    p2: "Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.",
    frontPostImage: "/119236-OQ05QX-268.png",
    footer: footer
  }


  return res.render("index", { receitas: receitas.filter((_, indice) => indice <= 5), index: index })
})

server.get("/recipe", function (req, res) {
  const recipe = {
    footer: footer
  }
  return res.render("recipe", { receitas: receitas, recipe: recipe })
})

server.get("/about", function (req, res) {
  const about = {
    aboutFoodfy: [
      "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.",
      "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per."
    ],
    start: [
      "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.",
      "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per."
    ],
    ourRecepies: [
      "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.",
      "Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per."
    ],
    footer: footer
  }
  return res.render("about", { receitas: receitas, about: about })
})

server.get("/aboutRecipe/:index", function (req, res) {
  const recipeIndex = req.params.index
  const aboutRecipe = {
    footer: footer
  }


  return res.render("aboutRecipe", { receita: receitas[recipeIndex], aboutRecipe: aboutRecipe })
})

// server.get("/recipes/:index", function (req, res) {
//   const recipes = receitas
//   const recipeIndex = req.params.index
//   console.log(recipes[recipeIndex])

// })


server.listen(5000, function () {
  console.log("Working! Dont disturb!")
})
