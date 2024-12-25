import '../styles/App.css'
import SideBar from './SideBar.jsx'
import Explorer from './Explorer.jsx'
import { useState, useEffect } from 'react'

function App() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  const toggleExplorer = () => {
    setIsExplorerOpen(!isExplorerOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) { 
      if (isExplorerOpen) {
        setIsExplorerOpen(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isExplorerOpen]); 


  return (
    <div className={`grid-app ${isExplorerOpen ? 'explorer-open' : ''}`}>
      <div className="side-bar">
        <SideBar toggleExplorer={toggleExplorer} />
      </div>
      {isExplorerOpen && (<div className='explorer'><Explorer /></div>)}
      <div className="main-content">
        <div className="top-bar">

        </div>

      </div>
      <div className="status-bar">

      </div>
    </div>
  )
}

export default App
