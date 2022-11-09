

async function getGenders(){
    const api = 'http://localhost:3001/api/v1/'
    const listRes= await fetch(`${api}/gender/`)
    const jsonForm = await listRes.json()
    return jsonForm.map((item)=>{
        return {
            id:item[0],
            genero:item[1]
        }
    })   
}

export { getGenders}
