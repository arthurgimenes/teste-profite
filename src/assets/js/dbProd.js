import prod_images from '../../index.js'
const prod_images_collection = Object.values(prod_images)
export default [{
    code: 0,
    image: {
        url: prod_images_collection[0]
    },
    title: 'Tênis couro puma R698 Q4 V2',
    rating: 3,
    price: {
        off: 399.00,
        on: 299.00
    },
    getInstallments(amount){ return (this.price.on / amount).toFixed(2) }
},{
    code: 1,
    image: {
        url: prod_images_collection[1]
    },
    title: 'Tênis couro puma R698 Q4 V2',
    rating: 1,
    price: {
        off: 399.00,
        on: 299.00
    },
    getInstallments(amount){ return (this.price.on / amount).toFixed(2) }
},{
    code: 2,
    image: {
        url: prod_images_collection[2]
    },
    title: 'Tênis couro puma R698 Q4 V2',
    rating: 5,
    price: {
        off: 399.00,
        on: 299.00
    },
    getInstallments(amount){ return (this.price.on / amount).toFixed(2) }
},{
    code: 3,
    image: {
        url: prod_images_collection[3]
    },
    title: 'Tênis couro puma R698 Q4 V2',
    rating: 1,
    price: {
        off: 399.00,
        on: 299.00
    },
    getInstallments(amount){ return (this.price.on / amount).toFixed(2) }
}]