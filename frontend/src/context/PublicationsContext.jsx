import { createContext, useContext, useState } from 'react'

const PublicationsContext = createContext()

export function PublicationsProvider({ children }) {
  const [publicaciones, setPublicaciones] = useState([])

  const agregarPublicacion = (nueva) => {
    setPublicaciones(prev => [nueva, ...prev])
  }

  return (
    <PublicationsContext.Provider value={{ publicaciones, agregarPublicacion }}>
      {children}
    </PublicationsContext.Provider>
  )
}

export function usePublications() {
  return useContext(PublicationsContext)
}