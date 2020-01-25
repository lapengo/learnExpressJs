const conn = require('./../configs/conn.js')
module.exports = {
    getAdmin: () => {
        const query = `SELECT * FROM admins`
        return new Promise((resolve, reject) => {
            conn.query(query, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getAdminID: (username) => {
        const query = `SELECT * FROM admins WHERE username = '${username}' `
        return new Promise((resolve, reject) => {
            conn.query(query, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    postAdmin: (data) => {
        const query = 'INSERT INTO admins SET ?'
        return new Promise((resolve, reject) => {
            conn.query(query, data, (err, result) => {
                if (!err) {
                    console.log(111)
                    resolve(result)
                } else {
                    reject(new Error(query))
                }
            })
        })
    },

    updateAdmin: (data) => {
        const query = 'UPDATE admins SET username = ?, password = ?, email = ?, levelid = ? WHERE idadmin = ?'
        return new Promise((resolve, reject) => {
            conn.query(query, data, (err, result) => {
                if (!err) {
                    console.log(111)
                    resolve(result)
                } else {
                    reject(new Error(query))
                }
            })
        })
    },

    deleteAdmin: (idadmin) => {
        const query = `DELETE FROM admins WHERE idadmin = '${idadmin}'`
        console.log(query)
        return new Promise((resolve, reject) => {
            conn.query(query, (err, result) => {
                if (!err) {
                    console.log(111)
                    resolve(result)
                } else {
                    reject(new Error(query))
                }
            })
        })
    },
}