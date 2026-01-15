import ModelsGrid from "@/app/components/ModelsGrid"
import { getModels } from "../lib/models"
import { ModelsPageProps } from "../types"





export default async function Page({ searchParams }: ModelsPageProps) {
    const models = await getModels()
    const { query } = await searchParams
    
    const filteredModels = query ?
    models.filter(model => {
        return (
        model.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
        model.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )}
): models


    return(
        <>
        <form>
            <input 
            type="text" 
            name="query" 
            placeholder="Search for your model"
            defaultValue={query}
            className="w-full border border-gray-500 rounded caret-gray-900 px-2 py-2"/>
        </form>
        <ModelsGrid title="3D Models" models={filteredModels} />
        </>
    ) 
}
