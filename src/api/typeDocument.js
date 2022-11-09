const api = 'http://localhost:3001/api/v1/'
async function getTypeDocument(){
    const listRes= await fetch(`${api}/type-document/`)
    const jsonForm = await listRes.json()
    return jsonForm.map((item)=>{
        return {
            id:item[0],
            tipo:item[1]
        }
    })    
}
export { getTypeDocument }