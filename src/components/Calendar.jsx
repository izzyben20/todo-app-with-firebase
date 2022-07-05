import { useContext } from 'react';
import { AiOutlineCalendar, AiOutlineCaretUp } from 'react-icons/ai';
import { calendarItems } from '../constants/index'
import { TodoContext } from '../context';

const Calendar = () => {
  const { setSelectedProject } = useContext(TodoContext)

  return (
    <section className='calendar'>
      <div className='header'>
        <div className='title'>
          <AiOutlineCalendar />
          <p>Calendar</p>
        </div>
        <div className='btns'>
          <span>
            <AiOutlineCaretUp />
          </span>
        </div>
      </div>
      <div className='items'>
        {
          calendarItems.map(item => (
            <div 
              className='item' 
              key={item}
              onClick={() => setSelectedProject(item)}
            >
              {item}
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Calendar