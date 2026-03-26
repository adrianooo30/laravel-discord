import { create } from "zustand";

export type ModalType = "invitePeople" | "createServer" | "createChannel" | "serverSettings" | "members"

interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    handleOpen: (type: ModalType) => void;
    handleClose: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    type: null,
    isOpen: false,
    handleOpen: ((type: ModalType) => set((state) => ({ ...state, type, isOpen: true }))),
    handleClose: (() => set((state) => ({ ...state, type: null, isOpen: false }))),
}))
