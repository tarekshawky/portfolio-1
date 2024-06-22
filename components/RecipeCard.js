import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({recipe}){
    const {title, slug, cookingTime,thumbnail} = recipe.fields
    return (
        <div>
            <div>
                <Image className="rounded-md" src={'https:' + thumbnail.fields.file.url}
                       alt={title}
                       width={thumbnail.fields.file.details.image.width}
                       height={thumbnail.fields.file.details.image.height}/>
            </div>
            <div>
                <h2 className="text-3xl text-slate-800 font-bold">{title}</h2>
                <p>Takes approx {cookingTime}</p>
                <Link href={'/recipes/' + slug}>Read More</Link>
            </div>
        </div>
    )
}