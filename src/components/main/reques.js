

export const data = async (url) => {
    const data1 = await fetch(url)
    return await data1.json()
}

//export{} anothe way