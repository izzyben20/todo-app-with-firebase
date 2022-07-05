import { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const defaultProject = 'today';
  const [selectedProject, setSelectedProject] = useState(defaultProject);

  return (
    <TodoContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
