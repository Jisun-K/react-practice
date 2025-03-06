import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todoItems, setTodoItems] = useState([
        {
            state: "completed",
            comment: "운동하기",
        },
        {
            state: "ing",
            comment: "책 읽기",
        },
    ]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        alert('change');
    }, [todoItems]);

    const onChangeValue = (e) => {
        // e.preventDefault();
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newTodo = { state: "ing", comment: inputValue };
        setTodoItems([...todoItems, newTodo]); // 상태 업데이트
        setInputValue(""); // 입력 필드 초기화
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="add"
                    value={inputValue}
                    onChange={onChangeValue} />
                <button type="submit">enter</button>
            </form>

            {
                todoItems.map((item) => {
                    return (
                        <TodoItem state={item.state} comment={item.comment} />
                    )
                })
            }
        </div>
    )
}

export default TodoList;