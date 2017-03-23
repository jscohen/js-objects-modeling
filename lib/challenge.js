'use strict'

const tv = {
  resolution: 1000,
  display: '3d',
  state: false,
  volume: 0,
  channel: 0,
  power: function () {
    tv.state = !tv.state
  },
  upVol: function () {
    if (tv.state) {
      tv.volume += 1
    }
  },
  downVol: function () {
    if (tv.state && tv.volume > 0) {
      tv.volume -= 1
    }
  },
  upChannel: function () {
    if (tv.state) {
      tv.channel += 1
    }
  },
  downChannel: function () {
    if (tv.state && tv.volume > 0) {
      tv.channel -= 1
    }
  }
}

tv.power()
tv.upChannel()
console.log(tv.channel)
console.log(tv.state)
