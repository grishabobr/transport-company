import { atom } from 'jotai'

export const priceInfoAtom = atom({
    index: {
        indexFrom: "000000",
        indexTo: "000000"
    },
    distance: 0,
    price: 0,
    deliveryDate: "0000-00-00"
});