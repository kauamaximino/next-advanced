import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo[]
}

const Todo = ({ todo }: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => { 
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const list: Todo[] = await response.json();
    setTodoList(list);
    setLoading(false);
  }

  return (
    <div>
      {loading && <h1>Loading...</h1>}

      {todoList.slice(0, 10).map((itemList: Todo) => (
        <li key={itemList.id}>
          {itemList.title} - {itemList.completed.toString()}
        </li>
      ))}
    </div>
  )
}

export default Todo;