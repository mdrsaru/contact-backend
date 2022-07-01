const UserService = require("../service/userService")()

const userController = () => {

    const getAll = async (req, res, next) => {
        console.log(req.body,'controller')
        const result = await UserService.getAll(req.body)
        // //console.log(result)
        return res.status(200).send({
            data: result,
        });
    }

    const login = async (req, res, next) => {
        try {
            const result = await UserService.login(req.body)
            // //console.log(result)
            return res.status(200).send({
                data: result,
            });
        }
        catch (err) {
            console.log(err)
            res.status(500).send({
                err:err
            })
        }
    }


    const createForm = async (req, res, next) => {
        try {
            res.render("addTodo");
        }
        catch (err) {
            res.status(500).send({err:err})
        }
    }

    const create = async (req, res, next) => {
        try {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const dob = req.body.dob;
            const email = req.body.email;
            const password = req.body.password;
            const result = await UserService.create({
                firstName,
                lastName,
                dob,
                email,
                password
            })

            return res.status(200).send({
                data: result
            })
        } catch (err) {
            res.status(500).send({
                err: err
            })
        }
    }

    const update = async (req, res, next) => {
        try {
            //console.log(req.body, 'controller')
            const id = req.body.id
            const name = req.body.name;
            const deadline = req.body.deadline;
            const points = req.body.points
            const result = await UserService.update({
                id,
                name,
                deadline,
                points,
            })

            return res.status(200).send({
                data: result
            })
        } catch (err) {
            res.status(500).send({
                err: err
            })
        }
    }

    return {
        getAll,
        create,
        createForm,
        update,
        login
    }
}

module.exports = userController