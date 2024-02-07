const scrollers = document.querySelectorAll('.scroller')

console.log()

if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addScrollerAnimation()
}

function addScrollerAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated', true)

    const scrollerInner = scroller.querySelector('.scroller__inner')
    const scrollerContent = Array.from(scrollerInner.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute('aria-hidden', true)
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}