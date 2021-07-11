module.exports = {
    create(req, res){
        let roomid 

        for(var i = 0; i < 6; i++) {
            i == 0 ? roomid = Math.floor(Math.random() * 10).toString() :
            roomid += Math.floor(Math.random() * 10).toString()
        }

        res.redirect(`/rooms/${roomid}`)
    }
}