const repository = require('../repository/adminRepo')

exports.adminService = () => {
    return new Promise((resolve, reject) => {
        repository.repo()
            .then((data) => {
                return resolve(data)
            })
            .catch((err) => {
                return reject(err)
            })
    })

}

