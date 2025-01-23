import { useRecoilState } from "recoil"
import { allItemsListAtom } from "./atom"

const Homepage = () => {
  const [allProducts, setAllProducts] = useRecoilState(allItemsListAtom);
  
  return (
    <div className="flex flex-row p-4">
      {allProducts.map((product) => {
        return (
          <div key={product.id} className="flex flex-col">
            <h1>{product.title}</h1>
            <img className=" h-96 " src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Homepage