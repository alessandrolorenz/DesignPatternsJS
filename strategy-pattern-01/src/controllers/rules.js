const { Shipping } = require('./shippingCalc')
const { Fedex, UPS, USPS } = require('./shippingFees')
const shipping = new Shipping()

module.exports = (company) => {
  let fedex, ups, usps = {}
        
      switch (company) {
        case 'fedex':
          fedex = new Fedex()
          shipping.setStrategy(fedex)
          break
        case 'ups':
          ups = new UPS()
          shipping.setStrategy(ups)
          break
        case 'usps':
          usps = new USPS()
          shipping.setStrategy(usps)
          break
        default:
          res.json({ msn: 'Invalid company' })
      }
      const pack = { from: 'Alabama', to: 'SweetHome', weight: 1.55 }
      console.log(shipping.calculate(pack))
      return shipping.calculate(pack)
    }