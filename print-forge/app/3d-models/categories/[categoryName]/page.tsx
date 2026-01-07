import { CategoryPageProps } from "@/app/types"


export default async function categoryPage ({ params } : CategoryPageProps) {
    console.log({ params })
    const { categoryName } = await params
    return(
        <h1>{categoryName}</h1>
    )
}