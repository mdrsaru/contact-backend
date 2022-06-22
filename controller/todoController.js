const TodoService = require("../service/todoService")()

const TodoController = () => {

    const getAll = async (req, res, next) => {
        const result = await TodoService.getAll(req.body)
        // console.log(result)
        return res.status(200).send({
            data: result,
        });
    }

    const createForm = async (req, res, next) => {
        try {
            res.render("addTodo");
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    const create = async (req, res, next) => {
        try {
            console.log(req.body, 'controller')
            const name = req.body.name;
            const deadline = req.body.deadline;
            const points = req.body.points
            const result = await TodoService.create({
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

    const update = async (req, res, next) => {
        try {
            console.log(req.body, 'controller')
            const id = req.body.id
            const name = req.body.name;
            const deadline = req.body.deadline;
            const points = req.body.points
            const result = await TodoService.update({
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
        update
    }
}

module.exports = TodoController