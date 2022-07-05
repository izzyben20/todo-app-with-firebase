import './App.css';
import Aside from './components/Aside';
import Main from './components/Main';
import User from './components/User';
import AddNewTodo from './components/AddNewTodo';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';

const App = () => {
  return (
    <main className="app">
      <Aside>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </Aside>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </main>
  );
};

export default App;
