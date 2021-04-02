exports.getDBURI = () => {
    return (`${process.env.MONGODB_URL}/restorani?retryWrites=true&w=majority`)
}
