import { useRecoilState } from 'recoil';
import { itemsAtomFamily } from './atom';

const Shop = ({id}) => {
  const [particularItem, setParticularItem] = useRecoilState(itemsAtomFamily(id))
  console.log(particularItem);
  return (
    <div>{particularItem.title}</div>
  )
}

export default Shop