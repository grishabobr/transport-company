import { atom } from 'jotai'

export const statusInfoAtom = atom({
    status: {
        created: "00.00.0000",
        processing: "00.00.0000",
        transit: "00.00.0000",
        delivered: "00.00.0000"
    },
    deliveryDate: "00.00.0000"
});



