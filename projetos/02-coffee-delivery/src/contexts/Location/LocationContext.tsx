import { createContext } from "react"
import { LocationProps } from "./LocationContextProvider"

interface LocationContextType {
  location: LocationProps[]
}

export const LocationContext = createContext({} as LocationContextType)