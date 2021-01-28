import React, {useState, useLayoutEffect} from 'react';
function useWindowSize() {
    const [size, setSize] = useState([0,0]);
    const [deviceSize, setDeviceSize] = useState([0,0]);
    useLayoutEffect(() => {
      function updateSize() {
        if(window.screen.width !== deviceSize[0] || window.screen.height !== deviceSize[1])
          setSize([window.innerWidth, window.innerHeight]);
          setDeviceSize([window.screen.width, window.screen.height]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  export default useWindowSize;