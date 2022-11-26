import '../App.css';
import InputSlider from 'react-input-slider';
import { useContext, useRef, useState } from 'react';
import { Scene2Context } from './Scene2';
import { useAppProvider } from './AppProvider';
import { SceneTypes } from '../constant';

const GlassBox = () => {
  const [temperature, setTemperature] = useState(30);
  const temperatureRef = useRef(30);
  const [isFinished, setIsFinished] = useState(false);
  const { setSceneCompleted } = useContext(Scene2Context);
  const { setScene } = useAppProvider();

  const handleTemperatureChange = (temp) => {
    setTemperature(temp);
    temperatureRef.current = temp;
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      if (temperatureRef.current === 37) {
        setIsFinished(true);
        setTimeout(() => {
          setSceneCompleted(true);
        }, 2000);

        setTimeout(() => {
          setScene(SceneTypes.SCENE_3);
        }, 3000);
      }
    }, 500);
  };

  const renderFinishLabel = () => {
    if (isFinished) {
      return <div className="scene2-finish-label blink">BOILING</div>;
    }
    return null;
  };

  return (
    <>
      <div className="termometer">
        <div className="termometer-container">
          <InputSlider
            axis="y"
            y={temperature}
            ymin={30}
            ymax={38}
            ystep={0.5}
            onChange={({ y }) => handleTemperatureChange(y)}
            yreverse={true}
            styles={termoStyles}
            onDragEnd={() => handleDragEnd()}
          />
        </div>
      </div>
      <span className="termometer-label">{temperature}°C</span>
      {renderFinishLabel()}
      <div className="glass-box">
        <div className="glass-box-tube"></div>
        <div className="glass-box-tube"></div>
        <div className="glass-box-tube"></div>
      </div>
    </>
  );
};
export default GlassBox;

const termoStyles = {
  track: {
    backgroundColor: 'transparent',
    height: 156,
    width: 3.5,
    marginTop: 45,
  },
  active: {
    backgroundColor: '#e55537',
  },
  disabled: {
    opacity: 0.5,
  },
};
