import { SimpleSigner } from 'uport-connect'
const appName = 'TimeChain'
const appSettings =  {
  clientId: '2onjEpP5fp12N1FA6KYMoRUSJeZMJDo6orv',
  network: 'rinkeby',
  signer: SimpleSigner('c335fa894ac5e0b8cf660126702ab3119780d649c4fdd1247daa1531e476a349')
}
export default {
  appName,
  appSettings
}