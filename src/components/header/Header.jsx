import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='headerDetails'>
          <h3 className="headerTitle">
              Hostels from your city.
          </h3>
          <p>
            Try searching for a city, a specific hotel, or even a landmark.
          </p>
      </div>      
      <div className='headerItems'>
        <div className="headerSearchItem">
            <input type="text" placeholder="Enter hostel name or destination"
            className="headerSearchInput"/>                  
        </div>
        <div>
          <span>We compare multiple booking site at once</span>
        </div>
      </div>
    </div>
  )
}

export default Header