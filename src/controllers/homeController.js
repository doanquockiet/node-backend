const connection = require('../config/database')

const getHomepage = (req, res) => {  
    return res.render('homepage.ejs')
}

const getABC = (req, res) => {
    res.render('example.ejs')
}

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;

    connection.query(
       `INSERT INTO
            Users (email, name, city)
                VALUES (?, ?, ?)`,
        [email, myname, city],
        function(err, results) {
        console.log(results);
            res.send('Create user successed')
    }
)
   
}

const  getCreatePage = (req, res) => {
    res.render('createuser.ejs')
}

module.exports = {
    getHomepage,postCreateUser,getCreatePage,
    getABC
}