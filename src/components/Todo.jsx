import { useState } from 'react'
import { BsCircle, BsCheckCircleFill, BsArrowCounterclockwise, BsTrash } from 'react-icons/bs'

const Todo = ({ todo }) => {
  const [hover, setHover] = useState(false)

  return (
    <section className='todo'>
      <div 
        className='todo-container'
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)} 
      >
        <div className='check-todo'>
          {
            todo.checked ? (
              <span className='checked'>
                <BsCheckCircleFill color='#bebebe' />
              </span>
            ) : (
              <span className='unchecked'>
                <BsCircle color={todo.color} />
              </span>
            )
          }
        </div>
        <div className='text'>
          <p style={{ color: todo.checked ? '#bebebe' : '#000'}}>{todo.text}</p>
          <span>{todo.time} - {todo.project}</span>
          <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
        </div>
        <div className='add-to-next-day'>
          {
            todo.checked && (
              <span>
                <BsArrowCounterclockwise />
              </span>
            )
          }
        </div>
        <div className='delete-todo'>
          {
            (todo.checked || hover) && (
              <span>
                <BsTrash />
              </span>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Todo