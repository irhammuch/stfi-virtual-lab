import { useContext, useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constant';
import { Scene3Context } from './Scene3';

const VesselFull = () => {
  const {
    ctmLeft,
    ctmTop,
    setCtmLeft,
    setCtmTop,
    setCtmTrans,
    setSceneCompleted,
  } = useContext(Scene3Context);

  const [dropTargetStyles, setDropTargetStyles] = useState({
    opacity: 1,
    transition: 'opacity 1s linear',
  });

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CTM,
      drop: (_, monitor) => {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(ctmLeft + delta.x);
        const top = Math.round(ctmTop + delta.y);
        setDropTargetStyles({ opacity: 0 });
        handleCtmTrans(left, top, '');
        setTimeout(() => {
          handleCtmTrans(left, top + 260, 'transform 1s ease-in');
          setTimeout(() => {
            handleCtmTrans(left, top + 210, 'transform 1s ease-in');
            setTimeout(() => {
              setSceneCompleted(true);
            }, 1300);
          }, 1000);
        }, 300);
      },
    }),
    []
  );

  const handleCtmTrans = (left, top, transition) => {
    setCtmTrans(transition);
    setCtmLeft(left);
    setCtmTop(top);
  };

  return (
    <div className="vessel-full-container">
      <div
        ref={drop}
        className="ctm-drop-target"
        style={dropTargetStyles}
      ></div>
      <div className="vessel-full"></div>
      <div className="termometer-full"></div>
    </div>
  );
};
export default VesselFull;
