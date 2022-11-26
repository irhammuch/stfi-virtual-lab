import { createContext, useContext, useState } from 'react';
import { SceneTypes } from '../constant';
import Scene1 from './Scene1';
import Scene2 from './Scene2';
import Scene3 from './Scene3';

const AppContext = createContext({
  scene: null,
  setScene: (_) => {},
});

export const useAppProvider = () => {
  return useContext(AppContext);
};

const AppProvider = () => {
  const [scene, setScene] = useState(SceneTypes.SCENE_1);

  function renderChild() {
    console.log('curren_scene', scene);
    switch (scene) {
      case SceneTypes.SCENE_1:
        return <Scene1 />;
      case SceneTypes.SCENE_2:
        return <Scene2 />;
      case SceneTypes.SCENE_3:
        return <Scene3 />;
      default:
        return null;
    }
  }

  return (
    <AppContext.Provider value={{ scene, setScene }}>
      {renderChild()}
    </AppContext.Provider>
  );
};
export default AppProvider;
