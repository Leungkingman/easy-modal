var m = new Modal({
  channel: 'channel',
  onShow: function() {
    console.log('modal show')
  },
  onClose: function() {
    console.log('modal close')
  }
})
m.show()