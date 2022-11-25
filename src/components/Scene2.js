import { createContext, useState } from 'react';
import GlassBox from './GlassBox';

export const Scene2Context = createContext({});

const Scene2 = () => {
  const [sceneCompleted, setSceneCompleted] = useState(false);

  const sceneStyles = {
    opacity: sceneCompleted ? '0' : '1',
    transition: 'opacity 1s linear',
  };

  return (
    <Scene2Context.Provider value={{}}>
      <div style={sceneStyles}>
        <GlassBox></GlassBox>
      </div>
    </Scene2Context.Provider>
  );
};
export default Scene2;
