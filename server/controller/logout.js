exports.logout = (req, res) => {
    res.clearCookie('jwt');
    res.send({ data: 'logout successful', error: null });
}