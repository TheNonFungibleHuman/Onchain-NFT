import { useWeb3React } from 'web3-react'
import { Card, Image } from 'react-bootstrap'
import Header from '../components/Header';
import NFTMinting from '../abi/NFTMinting.json';
import Web3 from 'web3'

export default function MyNFTs() {
  const { active, account } = useWeb3React()
  const web3 = new Web3(Web3.givenProvider)
  const nftMinting = new web3.eth.Contract(
    NFTMinting.abi,
    0x2e36ea848fd20fd9b6747789d5a59a8280f196b9
  );
  
  const getNFTs = async () => {
    const nftCount = await nftMinting.methods.balanceOf(account).call()
    const nfts = []
    for (let i = 0; i < nftCount; i++) {
      const tokenId = await nftMinting.methods.tokenOfOwnerByIndex(account, i).call()
      const name = await nftMinting.methods.nameOf(tokenId).call()
      const uri = await nftMinting.methods.tokenURI(tokenId).call()
      nfts.push({
        id: tokenId,
        name,
        uri,
      })
    }
    return nfts
  }
  
  const nfts = getNFTs()
  
  return (
    <div>
      <Header as='h1'>Your NFTs</Header>
      {nfts.map(nft => (
        <Card key={nft.id}>
          <Image src={nft.uri} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{nft.name}</Card.Header>
          </Card.Content>
        </Card>
      ))}
    </div>
  )
}
