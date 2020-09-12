
export const getGifs= async(category)=>{                               //encodeURI reemplaza los espacios por %20 etc
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=R8SIbnO8v5TPIzf6fzpFp0mIo7iVLZ0i`;
    const resp= await fetch(url);
    const {data}= await resp.json();
    
    const gifs=data.map(img=>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}