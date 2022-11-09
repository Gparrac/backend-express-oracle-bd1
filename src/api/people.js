

const api = 'http://localhost:3001/api/v1/'
async function getPeople(){
    const listRes= await fetch(`${api}/people/`)
    const jsonForm = await listRes.json()
    return jsonForm.map((item)=>{
        return {
            idPersona:item[0],
            idGenero:item[1],
            idDocumento:item[2],
            nombre:item[3],
            documento:item[4],
            edad:item[5],
            email:item[6],
            celular:item[7],
            direccion:item[8],
            genero:item[9],
            tipo:item[10]

        }
    })   
}
function sendPeople(datos){
    fetch(`${api}people/`, {
    method: "POST",
    body: JSON.stringify(datos),
  headers: {"Content-type": "application/json; charset=UTF-8"}
}).then(rta=>console.log(rta))

}

export { getPeople, sendPeople}