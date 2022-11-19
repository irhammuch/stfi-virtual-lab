import { useContext } from 'react';
import '../App.css';
import { Scene1Context } from './Scene1';

const Liquid = () => {
  const { liquidDegree } = useContext(Scene1Context);
  const getStyles = () => {
    return {
      transform: `rotate(-${liquidDegree}deg)`,
      WebkitTransform: `rotate(-${liquidDegree}deg)`,
    };
  };
  return <div className="liquid-tube" style={getStyles()}></div>;
};
export default Liquid;
