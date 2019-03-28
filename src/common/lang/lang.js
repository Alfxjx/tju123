export default {
  setLang(lang) {
    window.localStorage.setItem('userLang', lang)
  },
  getLang(defaultLang) {
    let local = window.localStorage.getItem('userLang')
    if (local === null) {
      return defaultLang
    } else {
      return local
    }
  }
}
