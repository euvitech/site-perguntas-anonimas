const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true
        while (isRoom) {
        /* generates number of room*/
        for(var i = 0; i < 6; i++) {
            i == 0 ? roomid = Math.floor(Math.random() * 10).toString() :
            roomid += Math.floor(Math.random() * 10).toString()
        }

        /* check Id */
        const roomsExistIds = await db.all(`SELECT id FROM rooms`)
        isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId )
        
        if(!isRoom){
             /* insert a room in Database*/
             await db.run(`INSERT INTO rooms (
                id,
                pass
             )VALUES(
                 ${parseInt(roomid)},
                 ${pass}
             )`)
             }

        }

        await db.close()

        res.redirect(`/rooms/${roomid}`)
    },

    async open(req, res){
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId}`)

        res.render("rooms", {roomid: roomId, question: questions})
    }
}