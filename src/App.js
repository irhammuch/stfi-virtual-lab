import { DndProvider } from 'react-dnd';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Scene1 from './components/Scene1';

function App() {
  return (
    <div className="app">
      <div className="app-filter">
        <DndProvider backend={HTML5Backend}>
          <Scene1></Scene1>
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
