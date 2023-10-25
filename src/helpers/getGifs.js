const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=w4it2llEMzKADMnsK82mNerbrVfqlBiw&q=${category}&limit=20`
    const res = await fetch(url)
    const { data } = await res.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height.url,
    }))
    return gifs
}

export default getGifs;