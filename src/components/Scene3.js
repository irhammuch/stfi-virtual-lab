import { createContext, useState } from 'react';
import CustomCtmLayer from './CustomCtmLayer';
import DraggableCtm from './DraggableCtm';
import VesselFull from './VesselFull';

export const Scene3Context = createContext({
  sceneCompleted: false,
  setSceneCompleted: (_) => {},
  ctmTop: 0,
  setCtmTop: (_) => {},
  ctmLeft: 0,
  setCtmLeft: (_) => {},
  ctmTrans: 0,
  setCtmTrans: (_) => {},
});

const Scene3 = () => {
  const [sceneCompleted, setSceneCompleted] = useState(false);
  const [ctmTop, setCtmTop] = useState(0);
  const [ctmLeft, setCtmLeft] = useState(0);
  const [ctmTrans, setCtmTrans] = useState('');

  const sceneStyles = {
    opacity: sceneCompleted ? '0' : '1',
    transition: 'opacity 1s linear',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
  };

  return (
    <Scene3Context.Provider
      value={{
        sceneCompleted,
        setSceneCompleted,
        ctmTop,
        setCtmTop,
        ctmLeft,
        setCtmLeft,
        ctmTrans,
        setCtmTrans,
      }}
    >
      <div style={sceneStyles}>
        <DraggableCtm />
        <CustomCtmLayer />
        <VesselFull />
      </div>
    </Scene3Context.Provider>
  );
};
export default Scene3;
