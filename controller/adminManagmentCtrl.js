const adminServices = require('../services/adminManagmentService')
const constants = require('../constant.json');

exports.test = (req, res) => {
    adminServices.adminService()
    .then((data) =>{
        res.status(constants.HttpStatus.OK)
        res.send(data)
    })
    .catch((err)=>{
        res.status(constants.HttpStatus.INTERNAL_SERVER_ERROR)
        res.send(err)
    })
};



