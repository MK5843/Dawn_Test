document.addEventListener('DOMContentLoaded', function() {
  if (!window.mz) {
    return
  }
  if (mz.context.filterShow) {
    // placeholder
  }
  function afterUpdate() {
    // placeholder
  }
  function closeSearch() {
    document.querySelector('.search-modal__close-button').click()
  }
  if (mz.app && mz.app.$bus) {
    mz.app.$bus.on('after-update', afterUpdate)
  }
  if (mz.suggest && mz.suggest.$bus) {
    mz.suggest.$bus.on('run-query', closeSearch)
  }
})
