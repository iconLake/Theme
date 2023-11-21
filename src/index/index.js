(() => {
  if (window.location.pathname.startsWith('/exhibition/')) {
    const pathParts = window.location.pathname.split('/')
    if (pathParts.length === 3) {
      window.location.href = '/exhibition.html'
      return
    } else if (pathParts.length === 4) {
      window.location.href = '/nft.html'
      return
    }
  }

  document.body.style.opacity = 1
})()
