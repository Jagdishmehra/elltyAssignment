import { useState } from 'react'
import './App.css'

function App() {
  const [selectedPages, setSelectedPages] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
    page6: false
  });
  
  const [selectAll, setSelectAll] = useState(false);
  
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    
    const updatedPages = {};
    Object.keys(selectedPages).forEach(page => {
      updatedPages[page] = newSelectAll;
    });
    
    setSelectedPages(updatedPages);
  };
  
  const handlePageSelect = (page) => {
    const updatedPages = { ...selectedPages, [page]: !selectedPages[page] };
    setSelectedPages(updatedPages);
    
    // Check if all pages are selected or not
    const allSelected = Object.values(updatedPages).every(value => value === true);
    setSelectAll(allSelected);
  };
  
  const handleDone = () => {
    console.log('Selected pages:', selectedPages);
    // You can add further functionality here
  };

  return (
    <div className="app-container">
      <div className="page-selector-container">
        <div className="page-selector-card">
          
          <div className="checkbox-item">
            <input 
              type="checkbox" 
              id="selectAll" 
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <label htmlFor="selectAll">All pages</label>
          </div>
          
          <div className="divider"></div>
          
          <div className="pages-list">
            {Object.keys(selectedPages).map((page, index) => (
              <div className="checkbox-item" key={page}>
                <input 
                  type="checkbox" 
                  id={page} 
                  checked={selectedPages[page]}
                  onChange={() => handlePageSelect(page)}
                />
                <label htmlFor={page}>Page {index + 1}</label>
              </div>
            ))}
          </div>
          
          <div className="divider"></div>
          
          <button className="done-button" onClick={handleDone}>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
