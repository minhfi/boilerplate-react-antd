
import { useEffect } from 'react'

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    if (document) {
      document.title = title
    }
  }, [title])
}
