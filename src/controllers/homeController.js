
const getHomepage = (req, res) => {
    res.send('Hello World! with doan quoc kiet')
}

const getABC = (req, res) => {
    res.render('example.ejs')
}

module.exports = {
    getHomepage,
    getABC
}