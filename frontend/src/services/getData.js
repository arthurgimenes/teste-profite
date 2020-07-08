import Axios from 'axios';

export const getProductList = async () => {
    const fetchData = await Axios.get(process.env.REACT_APP_PRODUCTS_URI);
    return fetchData.data?.arrayOfProducts;
}