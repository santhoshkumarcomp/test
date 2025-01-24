import { useRecoilValue } from 'recoil';
import { itemsAtomFamily } from './atom';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const {id} = useParams()
  const particularItem = useRecoilValue(itemsAtomFamily(id))
  console.log(particularItem);
  return (
    <>
    <div className=" relative top-[35px] flex flex-col jusitfy-between p-4 m-4 border-2 border-gray-300">
      <h1>{particularItem.title}</h1>
      <img className=" " src={particularItem.image} alt={particularItem.title} />
      <p>{particularItem.description}</p>
      <p>{particularItem.price}</p>
    </div>
    </>
  )
}

export default Shop