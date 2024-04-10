let container = document.getElementById("container")
let input = document.getElementById("inputGif")
let btn = document.getElementById("btnGif")
let key = "n2NiHAwkqyePIYaDXywwzq8CyYi1XOzs"
btn.addEventListener("click",getCats)

async function getCats(){
    let search = input.value
    let img = document.createElement("img")
    const response =  await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${search}`,{
        mode:"cors"
    })
    const json = await response.json()
    img.src = json.data.images.original.url
    container.appendChild(img)
}

// Rewritten for async and await keywords
async function loadJson(url){
    let response = await fetch(url)
    if(response.status === 200){
        return await response.json()
    }else{
        throw new Error(response.status)
    }
}
try{
    loadJson("dummyUrl.com")
}catch(e){
    console.log(e)
}