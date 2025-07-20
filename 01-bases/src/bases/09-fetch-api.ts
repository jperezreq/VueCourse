import type { GIFResponse } from "../interfaces/gif.response";


const apiKey = 'VZspQVIfV6F2vIUkjHG1szXmU7mIThzb';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => {
        return resp.json()
    })
    .then( (body:GIFResponse) => {
        console.log(body.data.images.downsized_medium.url)
    })
    .catch(err => console.log(err));
