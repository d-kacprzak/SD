import header from './header'
import gravatars from './gravatars'
import modal from "./modal";

export function setupListeners (window, gravatarContainer) {
  window.addEventListener('scroll', () => {
    gravatars(window, gravatarContainer)
  })

  window.addEventListener('resize', () => {
    gravatars(window, gravatarContainer)
  })
}

export function init (window, root) {
  root.appendChild(header(window))
  root.appendChild(modal(window))

  const gravatarContainer = window.document.createElement('div')
  gravatarContainer.classList.add('gravatars')

  root.appendChild(gravatarContainer)

  gravatars(window, gravatarContainer)

  setupListeners(window, gravatarContainer)
}
