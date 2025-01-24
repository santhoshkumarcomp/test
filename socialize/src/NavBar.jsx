import { Outlet } from "react-router-dom";
import { Link } from "react-router";


const NavBar = () => {
  
  return (
    <><div className="flex  justify-around fixed w-full bg-gray-300 p-2 ">
    <button  className="rounded-sm bg-gray-500 text-white cursor-pointer "><Link to='/category/men%27s%20clothing'>Men  clothing</Link></button>
    <button className="rounded-sm bg-gray-500 text-white cursor-pointer "><Link to='/category/women%27s%20clothing'>Women  clothing</Link></button>
    <button  className="rounded-sm bg-gray-500 text-white cursor-pointer "><Link to='/category/electronics'>Electronics</Link></button>
    <button  className="rounded-sm bg-gray-500 text-white cursor-pointer "><Link to='/category/jewellery'>Jewellery</Link></button>
  </div>
  <Outlet />
    </>
  )
}

export default NavBar