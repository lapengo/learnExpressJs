const model = require('./../models/admins')

module.exports = {
    first: (req, res) => {
        res.status(200).json('berhasil')
        res.end()
    },

    getAdmin: (req, res) => {
        // const id = req.params.id
        model.getAdmin()
            .then(result => {
                res.status(200).json(result)
                res.end()
            })
            .catch(err => {
                res.status(400).json("Can't get data!")
                res.end()
            })
    },

    getAdminID: (req, res) => {
        const id = req.params.username
        model.getAdminID(id)
            .then(result => {
                res.status(200).json(result)
                res.end()
            })
            .catch(err => {
                res.status(400).json("Can't get data!")
                res.end()
            })
    },

    create: (req, res) => {
        //-> untuk mengambil nama atau id dari form
        const {
            username,
            password,
            email,
            levelid
        } = req.body

        /**
         * -> untuk mengambil nama field
         * -> Jika nama fields tidak sama dengan nama/id pada form maka ditambahkan :
         * -> namafields : namaform
         * -> username : formusername
         */

        const data = {
            username,
            password,
            email,
            levelid
        }

        model.postAdmin(data)
            .then(result => {
                res.status(200).json(result)
                res.end()
            })
            .catch(err => {
                res.status(400).json(err)
                res.end()
            })
    },

    update: (req, res) => {
        //-> untuk mengambil nama atau id dari form
        const {
            username,
            password,
            email,
            levelid,
            idadmin
        } = req.body

        /**
         * -> untuk mengambil nama field
         * -> Jika nama fields tidak sama dengan nama/id pada form maka ditambahkan :
         * -> namafields : namaform
         * -> username : formusername
         */

        const data = [
            username,
            password,
            email,
            levelid,
            idadmin
        ]

        model.updateAdmin(data)
            .then(result => {
                res.status(200).json(result)
                res.end()
            })
            .catch(err => {
                res.status(400).json(err)
                res.end()
            })
    },

    delete: (req, res) => {
        
        const data = req.params.idadmin
        model.deleteAdmin(data)
            .then(result => {
                res.status(200).json(result)
                res.end()
            })
            .catch(err => {
                res.status(400).json(err)
                res.end()
            })
    },
}