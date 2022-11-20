import React, { createContext, useRef, useState } from 'react';
import { CustomLiquidLayer } from './CustomLiquidLayer';
import DraggableLiquid from './DraggableLiquid';
import Vessel from './Vessel';

export const Scene1Context = createContext({
  liquidDegree: '',
  setLiquidDegree: (_) => {},
  liquidTop: null,
  setLiquidTop: (_) => {},
  liquidLeft: null,
  setLiquidLeft: (_) => {},
  liquidTrans: null,
  setLiquidTrans: (_) => {},
});

const Scene1 = () => {
  const [liquidDegree, setLiquidDegree] = useState(45);
  const [liquidTop, setLiquidTop] = useState(0);
  const [liquidLeft, setLiquidLeft] = useState(0);
  const [liquidTrans, setLiquidTrans] = useState('');
  const [sceneCompleted, setSceneCompleted] = useState(false);
  const isVesselsFilled = useRef([false, false, false]);

  const setVesselFilled = (index) => {
    isVesselsFilled.current[index] = true;
    if (isVesselsFilled.current.every((item) => item)) {
      setTimeout(() => {
        setSceneCompleted(true);
      }, 1500);
    }
  };

  const sceneStyles = {
    opacity: sceneCompleted ? '0' : '1',
    transition: 'opacity 1s linear',
  };

  return (
    <Scene1Context.Provider
      value={{
        liquidDegree,
        setLiquidDegree,
        liquidTop,
        setLiquidTop,
        liquidLeft,
        setLiquidLeft,
        liquidTrans,
        setLiquidTrans,
      }}
    >
      <div className="scene-1" style={sceneStyles}>
        <DraggableLiquid></DraggableLiquid>
        <CustomLiquidLayer></CustomLiquidLayer>
        <div className="vessel-container">
          <Vessel onWaterFilled={setVesselFilled} index={0}></Vessel>
          <Vessel onWaterFilled={setVesselFilled} index={1}></Vessel>
          <Vessel onWaterFilled={setVesselFilled} index={2}></Vessel>
        </div>
      </div>
    </Scene1Context.Provider>
  );
};
export default Scene1;
