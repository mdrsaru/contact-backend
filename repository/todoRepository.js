const Todo = require('../models/todo')
const TodoRepository = () => {
    const getAll = async(args = {}) => {
        //console.log(args)
        const result = await Todo.find(args)
        return result
    }

    const create = async(args = {}) => {
        const result = await Todo.create(args);
        //console.log(result,'repo')
        return result
    }

    const update = async(args = {}) => {
        //console.log(args)
        const id = args.id;
        const name = args.name;
        const deadline = args.deadline;
        const points = args.points;
        const result = await Todo.findByIdAndUpdate(id,{$set:{
            name,
            deadline,
            points
        }});
        //console.log(result,'repo')
        return result
    }
    return {
        getAll,
        create,
        update
    }
}

module.exports = TodoRepository