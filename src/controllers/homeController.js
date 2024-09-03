
const getHomepage = (req, res) => {
    
    return res.render('homepage.ejs')
}

const getABC = (req, res) => {
    res.render('example.ejs')
}

const postCreateUser = (req, res) => {
    console.log("check " , req.body)
    res.send("craeteraasdasda sda")
}

module.exports = {
    getHomepage,postCreateUser,
    getABC
}