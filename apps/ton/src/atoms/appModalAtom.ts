import { atom } from 'jotai'
import { ReactNode } from 'react'

export interface AppModalData {
  isOpen: boolean
  title: ReactNode | null // Pass translated values
  content: ReactNode | null
  closeable?: boolean
}

export const appModalAtom = atom<AppModalData>({
  isOpen: false,
  title: null,
  content: null,
  closeable: true,
})
