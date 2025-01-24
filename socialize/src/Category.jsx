import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { itemsListAtom } from "./atom";


const Category = () => {
  const {name} = useParams();  
  console.log(name);
  const navigate = useNavigate();
  const category = useRecoilValue(itemsListAtom({category: name}));
  return (
    <> 
    <div onClick={() => navigate("/home")} className="relative inline   z-50 bg-red-500"><button className="cursor-pointer">Back</button></div>
    <div className=" grid grid-cols-4 p-4 ">
      {category.map((product) => {
        return (
          <div key={product.id} className=" top-[35px] grid col-span-1 w-[310px] jusitfy-between p-4 m-4 border-2 border-gray-300">
            
            <h1>{product.title}</h1>
            <img className=" h-84 " src={product.image} alt={product.title} />
           
            <p> <button>{product.description}</button></p>
            <p>{product.price}</p>
            
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Category