import { useState } from 'react'
import TodoForm from './TodoForm'

const EditTodo = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState()
  const [time, setTime] = useState()
  const [todoProject, setTodoProject] = useState()

  const handleSubmit = () => {

  }

  const projects = [
    { id: 1, name: 'personal', numOfTodos: '0' },
    { id: 2, name: 'work', numOfTodos: '1' },
    { id: 3, name: 'other', numOfTodos: '2' },
  ];

  return (
    <section className='editTodo'>
      <div className='heading'>
        Edit Todo
      </div>
      <div className='container'>
      <TodoForm 
          handleSubmit={handleSubmit}
          projects={projects}
          text={text}
          setText={setText}
          day={day}
          todoProject={todoProject}
          setTodoProject={setTodoProject}
          setDay={setDay}
          time={time}
          setTime={setTime}
        />
      </div>
    </section>
  )
}

export default EditTodo