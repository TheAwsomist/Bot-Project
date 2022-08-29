const api = require("kucoin-node-api");

const config = {
    apiKey: '630b9ad55e53a50001f3ea2e',
    secretKey: '4272ec8e-5d8a-41b7-b12d-571952810009',
    passphrase: 'Microscope123',
    environment: 'live'
  }

  api.init(config);


  const getacc = async() =>{
    const params = {id:"161084725"};
      const returned = await api.getAccountById(params);
      console.log(returned);
  }

  getacc();