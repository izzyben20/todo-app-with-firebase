import { useState } from 'react';
import { BsPalette, BsPenFill } from 'react-icons/bs';
import { AiOutlineCaretUp } from 'react-icons/ai';
import Project from './Project';
import AddNewProject from './AddNewProject';

const Projects = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false);
  const pencilColor = edit ? '#1ec94c' : '#000';

  const projects = [
    { id: 1, name: 'personal', numOfTodos: '0' },
    { id: 2, name: 'work', numOfTodos: '1' },
    { id: 3, name: 'other', numOfTodos: '2' },
  ];

  return (
    <section className="projects">
      <div className="header">
        <div className="title">
          <BsPalette />
          <p>Projects</p>
        </div>
        <div className="btns">
          {showMenu && projects.length > 0 && (
            <span className="edit" onClick={() => setEdit(!edit)}>
              <BsPenFill color={pencilColor} />
            </span>
          )}
          <AddNewProject />
          <span className="arrow">
            <AiOutlineCaretUp />
          </span>
        </div>
      </div>
      <div className='items'>
            {
              projects.map(project => (
                <Project
                  project={project}
                  key={project.id}
                  edit={edit}
                />
              ))
            }
      </div>
    </section>
  );
};

export default Projects;
