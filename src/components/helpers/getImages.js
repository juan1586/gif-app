export const getGifs = async ( category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=3&api_key=abDpaEKgvf5LL8fWyVVJPSz9U9eQEM39`;

    const resp = await fetch( url );
    const { data } = await resp.json();


    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });


    return gifs;

}