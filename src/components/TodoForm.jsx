import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { BsPalette } from 'react-icons/bs';
import {
  AiOutlineBell,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineClose,
} from 'react-icons/ai';

const TodoForm = ({
  handleSubmit,
  heading = false,
  text,
  setText,
  time,
  setTime,
  setTodoProject,
  day,
  todoProject,
  setDay,
  projects,
  showButtons = false,
  setShowModal = false,
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit} className="todoForm">
        <div className="text">
          {heading && <h3>{heading}</h3>}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add Todo..."
            autoFocus
          />
        </div>
        <div className="remind">
          <AiOutlineBell />
          <p>Remind Me</p>
        </div>
        <div className="pick-day">
          <p>
            <AiOutlineCalendar /> Choose a day
          </p>
          <DatePicker value={day} onChange={(day) => setDay(day)} />
        </div>
        <div className="pick-time">
          <p>
            <AiOutlineClockCircle /> Choose a time
          </p>
          <TimePicker value={time} onChange={(time) => setTime(time)} />
        </div>
        <div className="pick-project">
          <div className="title">
            <BsPalette />
            <p>Choose a project</p>
          </div>
          <div className="projects">
            {
              projects.length > 0 ? (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className={`project ${
                      todoProject === project.name ? 'active' : ''
                    }`}
                    onClick={() => setTodoProject(project.name)}
                  >
                    {project.name}
                  </div>
                ))) : (
                  <div style={{color: 'red'}}>Please add a project before proceeding</div>
                )
            }
          </div>
        </div>
        {showButtons && (
          <div>
            <div className="cancel">
              <AiOutlineClose onClick={() => setShowModal(false)} size={25} />
            </div>
            <div className="confirm">
              <button>Add Todo</button>
            </div>
          </div>
        )}
      </form>
    </MuiPickersUtilsProvider>
  );
};

export default TodoForm;
