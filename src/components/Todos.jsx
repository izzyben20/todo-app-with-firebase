import { useContext } from 'react'
import { TodoContext } from '../context'
import Next7Days from './Next7Days'
import Todo from './Todo'

const Todos = () => {
  const { selectedProject } = useContext(TodoContext)

  const todos = [
    {
      id: 'd5464',
      text: 'Go for a run',
      time: '10:00 AM',
      date: '06/03/2021',
      day: '6',
      checked: false,
      color: '#000',
      project: 'personal'
    },
    {
      id: 'd546456',
      text: 'Meeting',
      time: '09:00 AM',
      date: '03/03/2021',
      day: '1',
      checked: true,
      color: '#00ff00',
      project: 'work'
    }
  ]

  return (
    <section className='todos'>
      <div className='selected-project'>
        {selectedProject}
      </div>
      <div className='todoss'>
        {
          selectedProject === 'next 7 days' ? (
            <Next7Days todos={todos} />
          ) : (
            todos.map(todo => (
              <Todo todo={todo} key={todo.id}/>
            ))
          )
        }
      </div>
    </section>
  )
}

export default Todos