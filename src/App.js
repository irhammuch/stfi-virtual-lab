import { DndProvider } from 'react-dnd';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppProvider from './components/AppProvider';

function App() {
  return (
    <div className="app">
      <div className="app-filter">
        <DndProvider backend={HTML5Backend}>
          <AppProvider></AppProvider>
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
