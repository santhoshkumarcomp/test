import { Outlet } from "react-router-dom";


const NavBar = () => {
  function handleMenButtonClick() {
    console.log("menbutton clicked");
  }
  function handleWomenButtonClick() {
    console.log("Womenbutton clicked");
  }
  function handleElectronicsButtonClick() {
    console.log("Electronics clicked");
  }
  function handleJewelleryButtonClick() {
    console.log("Jewellery clicked");
  }
  return (
    <><div className="flex justify-around fixed w-full bg-gray-300 p-2">
    <button onClick={handleMenButtonClick} className="rounded-sm bg-gray-500 text-white cursor-pointer ">Men  clothing</button>
    <button onClick={handleWomenButtonClick} className="rounded-sm bg-gray-500 text-white cursor-pointer ">Women clothing</button>
    <button onClick={handleElectronicsButtonClick} className="rounded-sm bg-gray-500 text-white cursor-pointer ">Electronics </button>
    <button onClick={handleJewelleryButtonClick} className="rounded-sm bg-gray-500 text-white cursor-pointer ">Jewellery</button>
  </div>
  <Outlet />
    </>
  )
}

export default NavBar