
const getHomepage = (req, res) => {
    
    return res.render('homepage.ejs')
}

const getABC = (req, res) => {
    res.render('example.ejs')
}

module.exports = {
    getHomepage,
    getABC
}