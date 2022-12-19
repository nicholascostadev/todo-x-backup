import create from 'zustand'

import { persist } from 'zustand/middleware'

type Todo = {
  text: string
  id: string
  createdAt: Date
}

type TodosStore = {
  todos: Todo[]
  doneTodos: Todo[]
  addTodo: (todo: Todo['text']) => void
  deleteTodo: (todoId: Todo['id']) => void
  toggleTodoDoneState: (todoId: Todo['id']) => void
}

export const useTodosStore = create(
  persist<TodosStore>(
    (set) => ({
      todos: [],
      doneTodos: [],
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
      toggleTodoDoneState: (todoId) => {
        set((state) => {
          const todoToUndo = state.doneTodos.find((todo) => todo.id === todoId)
          if (todoToUndo) {
            return {
              doneTodos: state.doneTodos.filter((todo) => todo.id !== todoId),
              todos: [...state.todos, todoToUndo],
            }
          }

          const doneTodo = state.todos.find((todo) => todo.id === todoId)

          if (!doneTodo) return state

          return {
            doneTodos: [...state.doneTodos, doneTodo],
            todos: state.todos.filter((todo) => todo.id !== todoId),
          }
        })
      },
    }),
    {
      name: 'todos-storage',
    },
  ),
)
