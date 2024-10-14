import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  //early return pattern
  if(!isMenuOpen) return null
  
  return (
    <div className='p-5 shadow-lg w-48 h-screen '>
      <ul>
        <li>
          <Link to='/'>
              Home
          </Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <div className='mt-4'>
      <h1 className='font-bold'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      </div>
      <div className='mt-4'>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      </div>

      <div className='mt-4'>
      <h1 className='font-bold'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
