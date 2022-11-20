import { useContext, useState } from 'react';
import { useDrop } from 'react-dnd';
import '../App.css';
import { ItemTypes } from '../constant';
import { Scene1Context } from './Scene1';

function Vessel({ index, onWaterFilled }) {
  const {
    setLiquidDegree,
    liquidLeft,
    liquidTop,
    setLiquidLeft,
    setLiquidTop,
    setLiquidTrans,
  } = useContext(Scene1Context);

  const [hasWater, setHasWater] = useState(false);
  const [isFilling, setIsFilling] = useState(false);

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.VESSEL,
      hover: () => setVeselWater(),
      drop: (_, monitor) => {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(liquidLeft + delta.x);
        const top = Math.round(liquidTop + delta.y);
        handleLiquidTrans(left, top, '');
        setTimeout(() => {
          handleLiquidTrans(0, 0, 'transform .5s ease-in');
        }, 300);
      },
    }),
    [hasWater, isFilling]
  );

  const handleLiquidTrans = (left, top, transition) => {
    setLiquidTrans(transition);
    setLiquidLeft(left);
    setLiquidTop(top);
  };

  const setVeselWater = () => {
    if (!hasWater && !isFilling) {
      setIsFilling(true);
      setLiquidDegree('120');
      setTimeout(() => {
        setHasWater(true);
        setIsFilling(false);
        setLiquidDegree('45');
        onWaterFilled && onWaterFilled(index);
      }, 1000);
    }
  };

  return (
    <div ref={drop} className="vessel-box">
      <div className="vessel"></div>
      <div className={hasWater ? 'vessel-water active' : 'vessel-water'}></div>
    </div>
  );
}
export default Vessel;
