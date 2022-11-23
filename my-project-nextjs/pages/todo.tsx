import { GetServerSideProps } from 'next';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo[]
}

const Todo = ({ todo }: Props) => {
  return (
    <div>
      {todo.slice(0, 10).map((itemList: Todo) => (
        <li key={itemList.id}>
          {itemList.title} - {itemList.completed.toString()}
        </li>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => { 
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todoList: Todo[] = await response.json()

  return {
    props: {
      todo: todoList,
    }
  }
}

export default Todo;