import React, {useState, useEffect} from 'react';
function useWindowSize() {
    const [size, setSize] = useState([0,0]);
    const [deviceSize, setDeviceSize] = useState([0,0]);
    useEffect(() => {
      function updateSize() {
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