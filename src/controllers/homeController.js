const connection = require('../config/database')
const {getAllUser,getUserById,updateUserByID} = require('../services/CRUDServices')
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
}

const  getCreatePage = (req, res) => {
    res.render('createuser.ejs')
}

const  getUpdatePage = async(req, res) => {
    const userID = req.params.id;
    let user = await getUserById(userID)
    res.render('edituser.ejs', {userEdit: user})

}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;
    let userID = req.body.userID
   
// const [results, fields] = await connection.query('SELECT * FROM Users u') ;
    await updateUserByID(email, myname, city, userID)
    res.redirect('/')
}

module.exports = {
    getHomepage,postCreateUser,getCreatePage,
    getABC,getUpdatePage,postUpdateUser
}