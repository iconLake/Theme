export function htmlString (str) {
  return str
}

export function html (str) {
  const div = document.createElement('div')
  div.innerHTML = str
  const frag = document.createDocumentFragment()
  while (div.firstChild) {
    frag.appendChild(div.firstChild)
  }
  return frag
}

export function css (str) {
  const style = document.createElement('style')
  style.textContent = str
  return style
}

export const scss = css
