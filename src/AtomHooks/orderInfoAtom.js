import { atom } from 'jotai'

export const orderInfoAtom = atom({
    From: '',
    To: '',
    Length: '',
    Width: '',
    Height: '',
    Weight: '',
    Delicate: false
});