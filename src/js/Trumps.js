class Trumps {
    static formatReal(amount) {
        return ((amount)/100).toFixed(2).toString().replace('.',',')
    }
    static getInstallments(quantity,amount) {
        return (amount/quantity).toFixed(2)
    }
}
export default Trumps