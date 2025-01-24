import { useRecoilValue } from "recoil"
import { allItemsListAtom } from "./atom"
import { Link } from "react-router-dom";
const Homepage = () => {
  const allProducts = useRecoilValue(allItemsListAtom);
  
  return (
    <div className="  grid grid-cols-4 top-[35px] p-4 ">
      {allProducts.map((product) => {
        return (
          <div key={product.id} className="  grid col-span-1 w-[310px] jusitfy-between p-4 m-4 border-2 border-gray-300">
            
            <h1>{product.title}</h1>
            <img className=" h-84 " src={product.image} alt={product.title} />
           
            <p> <button><Link to={`shop/${product.id}`}>{product.description}</Link></button></p>
            <p>{product.price}</p>
            
          </div>
        )
      })}
    </div>
  )
}

export default Homepage