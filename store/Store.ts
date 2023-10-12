import { create } from 'zustand'

interface useStoreTypes {
    isVisible: boolean
}

const useStore = create<useStoreTypes>((set) => ({
    isVisible: false,
}))

export default useStore;