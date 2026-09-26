import React, { useEffect } from 'react'
import Index from './pages/Index.jsx'
import Chapter from './pages/Chapter.jsx'
import { BOOK_TITLE, chapterById } from './content.js'
import { usePath } from './router.jsx'

// Routes: "/" = Index, "/c01" .. "/c07" = chapter pages. Unknown -> Index.
export default function App() {
  const path = usePath()
  const chapter = chapterById(path.replace('/', ''))

  useEffect(() => {
    document.title = chapter
      ? `${chapter.num} ${chapter.title} · ${BOOK_TITLE}`
      : BOOK_TITLE
  }, [chapter])

  if (!chapter) return <Index />

  return <Chapter chapter={chapter} />
}
