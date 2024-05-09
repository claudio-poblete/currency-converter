const API_URL = 'https://mindicador.cl/api'

const fetchData = async (endpoint) =>{
  try{
    const response = await fetch (`${API_URL}/${endpoint}`)
    if(!response.ok){
      throw new Error('Error al obtener los datos')
    }
    return await response.json()
  }catch(error){
    throw new Error('Error al realizar la solicitud a la API')
  }
}

export {fetchData}