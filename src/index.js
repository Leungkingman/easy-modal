import './index.scss'
import tpl from './modal.tpl.html'

class Modal {
  constructor(opts) {
    this.channel = opts.channel

    this.onShow = () => {
      if (opts && opts.onShow && typeof(opts.onShow) == 'function') {
        this.onShow = opts.onShow()
      }
    }

    this.onClose = () => {
      document.getElementById("modal").style.display = 'none'
      if (opts && opts.onClose && typeof(opts.onClose) == 'function') {
        return opts.onClose()
      }
    }
  }

  show() {
    document.body.insertAdjacentHTML("beforeend", tpl)
    document.getElementById("modalCloseBtn").addEventListener("click", this.onClose);
    this.onShow()
  }
}

export default Modal