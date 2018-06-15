function getUsers(req, res) {
  res.json({
    paging: {
      page: 1,
      pageSize: 5,
    },
    items: [{
      userId: 1,
      username: 'kramres001',
      firstName: 'Stefan',
      lastName: 'Kramreither',
    }],
  });
}

module.exports = { getUsers };
