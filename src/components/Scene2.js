import { createContext, useState } from 'react';
import GlassBox from './GlassBox';

export const Scene2Context = createContext({
  sceneCompleted: false,
  setSceneCompleted: (_) => {},
});

const Scene2 = () => {
  const [sceneCompleted, setSceneCompleted] = useState(false);

  const sceneStyles = {
    opacity: sceneCompleted ? '0' : '1',
    transition: 'opacity 1s linear',
    height: '100vh',
  };

  return (
    <Scene2Context.Provider value={{ sceneCompleted, setSceneCompleted }}>
      <div style={sceneStyles}>
        <GlassBox />
      </div>
    </Scene2Context.Provider>
  );
};
export default Scene2;
