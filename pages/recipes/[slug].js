import { createClient } from 'contentful'
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:  process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'recipe'
    })
    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug}
        }
    })
    return{
        paths: paths,
        fallback: false
    }
}
export  async function getStaticProps({params}){
   const {items} = await client.getEntries({
       content_type:'recipe',
       'fields.slug': params.slug
   })
    return{
       props:{recipe:items[0]}
    }
}
export default function RecipeDetails({recipe}) {
    const {title, cookingTime,featuredImage, ingredients, method} = recipe.fields

    return (
    <div>
      <div>
          <Image src={'https:' +featuredImage.fields.file.url} alt={title}  width={1200} height={1200}/>
      </div>
        <div>
            <h2>{title}</h2>
            <p>{cookingTime}</p>
            {ingredients.map(ing => (
                <span key={ing}>{ing}</span>
            ))}
            <div>Methods
                {documentToReactComponents(method)}
            </div>
        </div>
    </div>
  )
}