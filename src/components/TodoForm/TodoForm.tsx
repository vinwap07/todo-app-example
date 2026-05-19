import { useState } from "react";

type TodoFormProps = { onAdd: (todoLabel: string) => void }

export const TodoForm = (props: TodoFormProps) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        const trimmedText = inputValue.trim();

        if (trimmedText === '') {
            return;
        }

        props.onAdd(trimmedText);

        setInputValue('');
    }

    return (
    <div>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Что нужно сделать?"
        />
      <button onClick={handleSubmit}>
        Добавить задачу
      </button>
    </div>
  );
}