exports.getDBURI = () => {
    let url = process.env.MONGODB_URL,
        return (`${url}/restorani?retryWrites=true&w=majority`)
}