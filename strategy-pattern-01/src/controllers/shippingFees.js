function Fedex(){
  this.calculate = pack => {
    console.log(pack)
    return 1.8
  }
} 
function UPS(){
  this.calculate = pack => {

    return 1.7
  }
} 
function USPS(){
  this.calculate = pack => {

    return 2.6
  }
} 

module.exports = {Fedex, UPS, USPS }
