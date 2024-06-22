import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({recipe}){
    const {title, slug, cookingTime,thumbnail} = recipe.fields
    return (
        <div>
            <div>
                <Image src={'https:' + thumbnail.fields.file.url}
                       alt={title}
                       width={thumbnail.fields.file.details.image.width}
                       height={thumbnail.fields.file.details.image.height}/>
            </div>
            <div>
                <h2>{title}</h2>
                <p>Takes approx {cookingTime}</p>
                <Link href={'/recipes/' + slug}>Cook This</Link>
            </div>
        </div>
    )
}