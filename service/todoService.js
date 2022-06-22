const TodoRepository = require('../repository/todoRepository')()

const TodoService = () => {
    const getAll = async (args = {}) => {

        const result = await TodoRepository.getAll(args)
        return result
    }

    const create = async (args = {}) => {

        const name = args.name;
        const points = args.points;
        const deadline = args.deadline;
        const result = await TodoRepository.create({
            name,
            deadline,
            points
        })
        return result
    }

    const update = async (args = {}) => {
        const id = args.id;
        const name = args.name;
        const points = args.points;
        const deadline = args.deadline;
        const result = await TodoRepository.update({
            id,
            name,
            deadline,
            points
        })
        return result
    }
    return {
        getAll,
        create,
        update
    }
}

module.exports = TodoService