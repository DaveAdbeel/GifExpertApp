import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {
    const [categories, setCategories] = useState([]); 
    const onAddCategory = (newCategory) => {
        if (!categories.includes(newCategory))
            setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onInputSubmit={onAddCategory}/>
            <ol aria-label="gif-list">
                {categories.map( (category, key) => <GifGrid  key={key} category={category}/>)}
            </ol>
        </>
    )
}

export default GifExpertApp