import { useState, useContext } from 'react';
import { BsPencil } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import Modal from './Modal';
import RenameProject from './RenameProject';
import { TodoContext } from '../context';

const Project = ({ project, edit }) => {
  const { setSelectedProject } = useContext(TodoContext)
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="project">
      <div 
        className="name"
        onClick={() =>setSelectedProject(project.name)}
      >{project.name}</div>
      <div className="btns">
        {edit ? (
          <div className="edit-delete">
            <span className='edit' onClick={() => setShowModal(true)}>
              <BsPencil size={12} />
            </span>
            <span className='delete'>
              <ImCancelCircle size={12} />
            </span>
          </div>
        ) : (
          project.numOfTodos > 0 && (
            <div className="total-todos">{project.numOfTodos}</div>
          )
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
          <RenameProject
            project={project}
            setShowModal={setShowModal}
          />
      </Modal>
    </section>
  );
};

export default Project;
