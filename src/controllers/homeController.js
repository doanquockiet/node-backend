const connection = require('../config/database')
const {getAllUser} = require('../services/CRUDServices')
const getHomepage = async (req, res) => {  
    let results = await getAllUser();
    return res.render('homepage.ejs', {listUsers: results})
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

const  getUpdatePage = (req, res) => {
    const userID = req.params.id;
    res.render('edituser.ejs')

}
module.exports = {
    getHomepage,postCreateUser,getCreatePage,
    getABC,getUpdatePage
}