const connection = require('../config/database')
const getAllUser = async () => {
    let [results, fields] = await connection.query('select * from Users')
   return results;
}


const getUserById = async (userID) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userID])
    let user = results && results.length > 0 ? results[0] : {}

    return user;
}

const updateUserByID = async (email, myname, city, userID) => {
    let [results, fields] = await connection.query(               
        `UPDATE Users
            SET email = ?,name = ?, city= ?
                WHERE id = ?;`,
         [email, myname, city, userID],
    )
}

const deleteUserByID =async (userID) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id=?;`,
         [userID],
)
}

module.exports = {
    getAllUser,getUserById,updateUserByID,deleteUserByID
}