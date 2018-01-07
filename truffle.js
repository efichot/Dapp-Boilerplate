module.exports = {
networks: {
  localhost: {
    host: "localhost", 
    port: 8546,
    network_id: "*" 
  },  
  rinkeby: {
    host: "localhost",
    port: 8545,
    network_id: "4",
    gas:4600000,
    from: '7e259c2ad32cf0df6d92e0ec33ae4ae5109fddd1'
  },
  ganache: {
    host: "127.0.0.1",
    port: 7545,
    network_id: 5777, // Match default Ganache network_id
    gas:4600000,
  },
}
};
