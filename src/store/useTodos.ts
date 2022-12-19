import create from 'zustand'

import { persist } from 'zustand/middleware'

type Todo = {
  text: string
  id: string
  createdAt: Date
}

type TodosStore = {
  todos: Todo[]
  addTodo: (todo: Todo['text']) => void
  deleteTodo: (todoId: Todo['id']) => void
}

export const useTodosStore = create(
  persist<TodosStore>(
    (set) => ({
      todos: [],
      addTodo: (todo) => {
        set((state) => ({
          todos: [
            ...state.todos,
            { text: todo, id: todo + '-14', createdAt: new Date() },
          ],
        }))
      },
      deleteTodo: (todoId) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== todoId),
        }))
      },
    }),
    {
      name: 'todos-storage',
    },
  ),
)
