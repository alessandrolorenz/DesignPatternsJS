const rules = require('./rules')
class Controller01 {

  getResult(req, res) {
    const company = req.params.company
    const result = rules(company)

    res.json(result)
  }


}

module.exports = new Controller01()