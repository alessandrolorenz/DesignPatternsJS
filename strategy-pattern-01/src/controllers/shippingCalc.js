function Shipping() {
 this.shippCompany = {}
 this.setStrategy = (company) => {
  this.shippCompany = company
 }
 this.calculate = (pack) => {
   return this.shippCompany.calculate(pack)
 }
}

module.exports = { Shipping }