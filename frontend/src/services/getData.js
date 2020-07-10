import Axios from 'axios';

export const getProductList = async () => {
    //console.log("ENV >> ", process.env.REACT_APP_PRODUCTS_URI)
    const fetchData = await Axios.get(process.env.REACT_APP_PRODUCTS_URI);
    return fetchData.data?.products;
}