export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NWPhRJHdMBIPy7zSzQ7SBh9tUJgnvTue&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gif = data.map (img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gif)
    return gif;
}