import {useContext} from 'react'
import {CityContext} from '../context/CityContext'

function Header() {
  const {city, setCity} = useContext(CityContext);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className='header_container'>
      <select 
      className="form-select form-select-lg mb-3" 
      aria-label="Large select example"
      onChange={handleChange}
      value={city}
      >
        <option value="">Please select a city</option>
        <option value="izmir">İzmir</option>
        <option value="istanbul">İstanbul</option>
        <option value="ankara">Ankara</option>
        <option value="antalya">Antalya</option>
        <option value="konya">Konya</option>
      </select>
    </div>
  )
}

export default Header
