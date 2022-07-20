export const getGif = async( categoryItem ) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=jv0o4tyIjC6Vv059Ld3u4N8Ennx24rQg&q=${categoryItem}&limit=20`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    // const { data } = await resp.json();
    // console.log( data );

    const gifs =  data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })

    )
    // console.log(gifs);
    return gifs;
}