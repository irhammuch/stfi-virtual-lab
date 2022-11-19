import React, { createContext, useState } from 'react';
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
  const [liquidDegree, setLiquidDegree] = useState('45');
  const [liquidTop, setLiquidTop] = useState(0);
  const [liquidLeft, setLiquidLeft] = useState(0);
  const [liquidTrans, setLiquidTrans] = useState('');

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
      <DraggableLiquid></DraggableLiquid>
      <CustomLiquidLayer></CustomLiquidLayer>
      <div className="vessel-container">
        <Vessel></Vessel>
        <Vessel></Vessel>
        <Vessel></Vessel>
      </div>
    </Scene1Context.Provider>
  );
};
export default Scene1;
