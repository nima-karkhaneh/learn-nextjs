import { getCategoryBySlug } from "@/app/lib/categories"
import { CategoryPageProps } from "@/app/types"


export default async function categoryPage ({ params }: CategoryPageProps) {
    const { categoryName } = await params
    const category = getCategoryBySlug(categoryName)
    return(
        <h1>{category.displayName} & the rest</h1>
    )
}