const path = require('path')
exports.createPages = async ({ actions, graphql}) => {

  const {data} = await graphql(`
  {
 categories: allStrapiCategory {
    nodes {
      id
      name
    }
  }
}
`)

  if (data.categories.errors) {
    reporter.panic("Error loading recipes!", reporter.errors)
  }

data.categories.nodes.forEach(category => {
    actions.createPage({
      path: `/${category.name.split(' ').join("-")}`,
      component: require.resolve(`./src/templates/category.js`),
      context: {
       id: category.id,
      },
    })
  })

  const result = await graphql(`
  {
  allRecipes: allStrapiRecette {
     recettes:nodes {
      id
      title
    }
  }
  }
  `)
result.data.allRecipes.recettes.forEach(recipe => {
    actions.createPage({
      path: `/recettes/${recipe.title.split(' ').join("-")}`,
      component: require.resolve(`./src/templates/recette.js`),
      context: { id: recipe.id}
    })
  })


}





