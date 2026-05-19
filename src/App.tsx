import { TodoItem } from './components/TodoItem/TodoItem.tsx';
import { TodoForm } from './components/TodoForm/TodoForm.tsx';
import './App.css'
import type { TodoItemType } from "./shared/types.ts";
import { useState } from "react";
import { data } from 'react-router-dom';

const mockTodos: TodoItemType[] = [{
  id: 1,
  label: 'Сдать чекпоинт по проектно-технологической практике СРОЧНО !!!',
  isChecked: false
}, {
  id: 2,
  label: 'Сдать семестровку Кириллу!',
  isChecked: false
}, {
  id: 3,
  label: 'Купить хлеб и сосиски :)',
  isChecked: true
}]

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(mockTodos);

  const handleTaskCheckedChange = (id: number) => {
    setTodos((prevState) => {
      return prevState.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            isChecked: !value.isChecked
          }
        }

        return value;
      })
    });
  }

  const handleAddTodo = (todoLabel: string) => {
    const newTodo : TodoItemType = {
      id: Date.now(),
      label: todoLabel,
      isChecked: false
    };

    setTodos([...todos, newTodo]);
  }

  // TODO: реализовать компонент TodoForm для добавления новой задачи.
  //
  // Подсказки:
  // 1. Создайте новый компонент в src/components/TodoForm/TodoForm.tsx
  // 2. Внутри компонента понадобится:
  //    - поле ввода <input /> для текста новой задачи
  //    - локальное состояние через useState для хранения введённого текста
  //    - кнопка "Добавить задачу", по клику на которую вызывается колбэк из props
  // 3. Опишите тип пропсов, например:
  //      type TodoFormProps = { onAdd: (todoItem: TodoItemType) => void }
  // 4. В App.tsx:
  //    - импортируйте TodoForm
  //    - напишите функцию handleAddTodo, которая через setTodos добавит новую задачу в список
  //      (не забудьте сгенерировать уникальный id — например, через Date.now() или crypto.randomUUID())
  //    - добавьте <TodoForm onAdd={handleAddTodo} /> над списком задач
  // 5. Подумайте про крайние случаи: пустая строка, пробелы, очистка инпута после добавления.

  return (
      <div className="todo-list">
        <TodoForm onAdd={handleAddTodo}/>
        {/* Сюда позже нужно добавить <TodoForm onAdd={handleAddTodo} /> */}
        {todos.map((value) => (
            <TodoItem id={value.id} key={value.id} label={value.label} done={value.isChecked} onChange={handleTaskCheckedChange} />
        ))}
      </div>
  )
}

export default App
