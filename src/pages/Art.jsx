import { useEffect, useState } from 'react';
import { useRef } from "react"
import { arts } from "../arts";
import Navbar from '../components/Navbar';
import "../styles/art.css";



function Art() {

  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredArts, setFilteredArts] = useState(arts)
  let filters = ["Baskı", "Yağlı Boya", "Karakalem", "Kolaj", "Deforme Portre", "Renk Skalası", "Guaj", "Figür", "Füzen", "Akrilik"]

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory)
      setSelectedFilters(filters)
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  }

  useEffect(() => {
    filterItems()
  }, [selectedFilters])

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempArts = selectedFilters.map((selectedCategory) => {
        let temp = arts.filter((art) => art.category === selectedCategory)
        return temp
      })
      setFilteredArts(tempArts.flat())
    } else {
      setFilteredArts([...arts])
    }
  }

  const filterRef = useRef()

  const showFilter = () => {
    filterRef.current.classList.toggle("filter-container")
  }

  const hideFilter = () => {

  }

  return (
    <>
      <Navbar />
      <div className='art' >

        <p className='top-text'>Çalışmalarımı bu sayfadan inceleyebilirsiniz. İncelemek istediğiniz belirli bir kategori varsa filtreleme bölümünü kullanabilirsiniz.</p>
        <div className='buttons-container'>
          <p className='browse'>Kategoriye göre ara:</p>
          <div className='filter-button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-filter-left" viewBox="0 0 16 16">
              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
          {filters.map((category, idx) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`button ${selectedFilters?.includes(category) ? "active" : ""}`}
              key={`filters-${idx}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='filter-button'>
          <p className='filters'>Filtreler</p>
          <svg onClick={showFilter} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-filter-left" viewBox="0 0 16 16">
            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <div className='filter-close' ref={filterRef}>
          <p className='filter-browse'>Kategoriye göre ara:</p>
          {filters.map((category, idx) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`button ${selectedFilters?.includes(category) ? "active" : ""}`}
              key={`filters-${idx}`}
            >
              {category}
            </button>

          ))}
          <button className='closeButton' onClick={showFilter}>KAPAT</button>
        </div>

        <div className='wrapper'>
          <div className='gallery'>
            <ul>
              {filteredArts.map((art, idx) => (
                <li key={`arts-${idx}`}>
                  <img src={art.img_link} />
                  <p>{art.category}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>



      </div>
    </>
  )
}

export default Art