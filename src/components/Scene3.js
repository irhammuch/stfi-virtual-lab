import { createContext, useState } from 'react';

export const Scene3Context = createContext({
  sceneCompleted: false,
  setSceneCompleted: (_) => {},
});

const Scene3 = () => {
  const [sceneCompleted, setSceneCompleted] = useState(false);

  const sceneStyles = {
    opacity: sceneCompleted ? '0' : '1',
    transition: 'opacity 1s linear',
    height: '100vh',
  };

  return (
    <Scene3Context.Provider value={{ sceneCompleted, setSceneCompleted }}>
      <div style={sceneStyles}></div>
    </Scene3Context.Provider>
  );
};
export default Scene3;
