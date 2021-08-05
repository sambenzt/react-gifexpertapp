export const getGifs = async(category) => {

    const apiKey = 'DOF36ev4DbGWdwViuX0eZ6Mrvw2nMl59';

    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=${ apiKey }`
    
    const resp = await fetch(url);

    const { data } = await resp.json();

    return data.map(img => ({
        id: img.id,
        title: img.title, 
        url: img.images.downsized_medium.url
    }));
}