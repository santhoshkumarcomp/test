import { atom, atomFamily, selector, selectorFamily } from "recoil";
import axios from "axios";

export const itemsAtomFamily = atomFamily({
  key: "itemsAtomFamily",
  default: selectorFamily({
    key: "itemsDefaultSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(res.data);
        return res.data;
      },
  }),
});
export const itemsListAtom = atomFamily({
  key: "itemsListAtom",
  default: selectorFamily({
    key: "itemsListDefaultSelectorFamily",
    get:
      ({ category }) =>
      async ({ get }) => {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        console.log(response.data);
        return response.data;
      },
  }),
});

export const allItemsListAtom = atom({
  key: "allItemsListAtom",
  default: selector({
    key: "allItemsListDefaultSelector",
    get: async ({ get }) => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(response.data);
      return response.data;
    },
  }),
});
