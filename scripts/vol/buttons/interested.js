function interested(element){
  return function(){
    const allEvents = require('../render/allEvents')
    const request = require('../request/request')
    const eventId = element.getAttribute('eventid')
    const volId = element.getAttribute('volid')
    const status = true
    console.log(eventId, volId, status)
    request.createFavorite(eventId, volId, status)
    .then(response => {
      allEvents()
    })
  }
}

module.exports = interested
