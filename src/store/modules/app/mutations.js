export default {
  showToast: (state, toast) => {
    const { color, timeout, message } = toast

    state.toast = {
      message,
      color,
      timeout,
      show: true,
    }
  },

  hideToast: (state) => {
    state.toast.show = false
  },

  resetToast: (state) => {
    state.toast = {
      show: false,
      color: 'black',
      message: '',
      timeout: 3000,
    }
  },
}
