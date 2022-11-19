import { useContext, useEffect } from 'react';

import { useDrag } from 'react-dnd';
import { ItemTypes } from '../constant';
import '../App.css';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Scene1Context } from './Scene1';

function DraggableLiquid() {
  const { liquidTop, liquidLeft, liquidTrans } = useContext(Scene1Context);
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.VESSEL,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  const getStyles = (isDragging) => {
    const transform = `translate3d(${liquidLeft}px, ${liquidTop}px, 0)`;
    return {
      position: 'absolute',
      opacity: isDragging ? 0 : 1,
      height: isDragging ? 0 : '',
      transition: liquidTrans,
      transform,
    };
  };

  return (
    <div ref={drag} style={getStyles(isDragging)}>
      <div className="liquid-tube"></div>
    </div>
  );
}
export default DraggableLiquid;
