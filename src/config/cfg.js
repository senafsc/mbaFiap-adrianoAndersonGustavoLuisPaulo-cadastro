const cfg = () => {
    return {
        jwt_secret: "V$CoD#",
        jwt_expires: "id",
        salt: 60 * 60 * 2,
        db: "mongodb+srv://UserMsApi:TrabalhoApi@cluster0.thtcwnc.mongodb.net/cadastro?retryWrites=true&w=majority"
    }
}

module.exports = cfg();