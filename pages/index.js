import { createClient } from 'contentful'
import RecipeCard from "../components/RecipeCard";

export  async function getStaticProps(){
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken:  process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({content_type:'recipe'})
    return {
        props: {
            recipes: res.items
        }
    }
}
export default function Recipes({recipes}) {
  return (
    <div className="recipe-list grid grid-cols-3 gap-4">
        {recipes.map(recipe => (
            <RecipeCard key={recipe.sys.id} recipe={recipe}/>
        ))}
    </div>
  )
}