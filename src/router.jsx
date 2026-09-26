import React, { useCallback, useEffect, useState } from 'react'

// Tiny client side router. No react-router. window.location.pathname + popstate.
export function currentPath() {
  const path = window.location.pathname || '/'
  const clean = path.replace(/\/+$/, '')
  return clean === '' ? '/' : clean.toLowerCase()
}

export function usePath() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const onPop = () => setPath(currentPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return path
}

export function navigate(to) {
  const from = currentPath()
  if (to === from) return
  try {
    window.history.pushState({ path: to }, '', to)
  } catch (err) {
    // Some browsers refuse pushState on file:// URLs. Hard nav still works.
    window.location.href = to
    return
  }
  window.dispatchEvent(new PopStateEvent('popstate'))
}

// Plain anchor with a client side upgrade. It still works with JS off.
export function Link({ to, children, ...rest }) {
  const handleClick = useCallback(
    (event) => {
      if (event.defaultPrevented) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (event.button !== 0) return
      event.preventDefault()
      navigate(to)
      window.scrollTo(0, 0)
    },
    [to],
  )

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
