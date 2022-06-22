import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000' 
export const getProducts = async() => {
    const products = await axios.get('/products')
    return products.data
}

export const getProductbyId = async (id)  => {
    const product = (await axios.get(`/products/${id}`)).data
    return product
}
  