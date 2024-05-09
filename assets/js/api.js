const API_URL = 'https://mindicador.cl/api'

const fetchData = async (endpoint) =>{
  try{
    const response = await fetch (`${API_URL}/${endpoint}`)
    if(!response.ok){
      throw new Error('Error al obtener los datos')
    }
    const data = await response.json()
    return data
  }catch(error){
    throw new Error('Error al realizar la solicitud a la API')
  }
}

export {fetchData}