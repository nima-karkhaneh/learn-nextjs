import { getAllModels } from "../lib/models"
import type { Model } from "../types"



export default async function ModelsPage () {
    const models = await getAllModels();
    return(
        <>
        <h1>Models</h1>
        <ul className="models">
            {models.map((model: Model) => {
                return(
                    <li key={model.id}>
                        <p>{model.name}</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}