const connection = require('../config/database')

const getHomepage = (req, res) => {  
    return res.render('homepage.ejs')
}

const getABC = (req, res) => {
    res.render('example.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT INTO
             Users (email, name, city)
                 VALUES (?, ?, ?)`,
         [email, myname, city],
)
   
// const [results, fields] = await connection.query('SELECT * FROM Users u') ;
console.log('check result', results);


}

const  getCreatePage = (req, res) => {
    res.render('createuser.ejs')
}

module.exports = {
    getHomepage,postCreateUser,getCreatePage,
    getABC
}