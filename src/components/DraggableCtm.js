import { useContext, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../constant';
import '../App.css';
import { getEmptyImage } from 'react-dnd-html5-backend';
import Ctm from './Ctm';
import { Scene3Context } from './Scene3';

function DraggableCtm() {
  const { ctmTop, ctmLeft, ctmTrans } = useContext(Scene3Context);
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.CTM,
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
    const transform = `translate3d(${ctmLeft}px, ${ctmTop}px, 0)`;
    return {
      position: 'absolute',
      opacity: isDragging ? 0 : 1,
      height: isDragging ? 0 : '',
      transition: ctmTrans,
      zIndex: 0,
      transform,
    };
  };

  return (
    <div ref={drag} style={getStyles(isDragging)}>
      <Ctm />
    </div>
  );
}
export default DraggableCtm;
