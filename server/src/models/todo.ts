import mongoose from 'mongoose';

interface ITodo {
    title: string,
    desc: string,
}

interface TodoModelInterface extends mongoose.Model<TodoDoc> {
    build(attr: ITodo): TodoDoc
}

interface TodoDoc extends mongoose.Document {
    title: string,
    desc: string,
}

const todoScehma = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
});

const Todo = mongoose.model<TodoDoc, TodoModelInterface>('Todo', todoScehma);

Todo.build = (attr: ITodo) => {
    return new Todo(attr);
}

export { Todo }