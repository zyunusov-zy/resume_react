import '../styles/App.css'
import SideBar from './SideBar.jsx'
import Explorer from './Explorer.jsx'
import StatusBar from './StatusBar.jsx'
import TopBar from './TopBar.jsx'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function App() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const files = ['overview.md',
    'skills.md',
    'education.md',
    'projects.md',
    'certificates.md',];
  const [selectedFile, setSelectedFile] = useState(files[0]);
  
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
  };


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
        <SideBar toggleExplorer={toggleExplorer} changeLang={changeLang} />
      </div>
      {isExplorerOpen && (<div className='explorer'><Explorer files={files} setSelectedFile={setSelectedFile} selectedFile={selectedFile}/></div>)}
      <div className="main-content">
        <div className="top-bar">
          <TopBar files={files} setSelectedFile={setSelectedFile} selectedFile={selectedFile}/>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <div className="status-bar">
        <StatusBar />
      </div>
    </div>
  )
}

export default App
