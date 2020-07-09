import Axios from 'axios';

export const getProductList = async () => {
    console.log("ENV >> ", process.env.REACT_APP_PRODUCTS_URI)
    const fetchData = await Axios.get("https://api.jsonbin.io/b/5f074e18343d624b07829acc");
    return fetchData.data?.products;
}