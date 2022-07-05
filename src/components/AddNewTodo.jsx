import { useState, useContext, useEffect } from 'react';
import Modal from './Modal';
import TodoForm from './TodoForm';
import { TodoContext } from '../context'

const AddNewTodo = () => {
  const { selectedProject } = useContext(TodoContext)
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [day, setDay] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [todoProject, setTodoProject] = useState(selectedProject)
  

  const handleSubmit = () => {

  }

  useEffect(() => {
    setTodoProject(selectedProject)
  },[selectedProject])

  const projects = [
    { id: 1, name: 'personal', numOfTodos: '0' },
    { id: 2, name: 'work', numOfTodos: '1' },
    { id: 3, name: 'other', numOfTodos: '2' },
  ];

  return (
    <div className="addNewTodo">
      <div className='btn'>
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm 
          handleSubmit={handleSubmit}
          heading='Create a New Todo'
          projects={projects}
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          todoProject={todoProject}
          setTodoProject={setTodoProject}
          setTime={setTime}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
};

export default AddNewTodo;
