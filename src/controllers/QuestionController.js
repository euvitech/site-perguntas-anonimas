module.exports = {
    index(req, res){
        const roomId = req.params.room
        const questionId = req.params.question
        const slug = req.params.action
        const password = req.body.password

        console.log(`room: ${roomId}, question: ${questionId}, action: ${slug}, password: ${password}`)
    }
}