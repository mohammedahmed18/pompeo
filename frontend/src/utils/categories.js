import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000' 
// get all categories
export const getCategories = async() =>{
    const categories =  (await axios.get('/categories')).data
    return categories
}

// get products for a specific category
export const getProductsByCategory = async(category_name) => {
    const products = (await axios.get('/categories/'+category_name)).data
    return products
}