import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { mintNFT } from "../lib/web3";

function Mint() {
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchAccount() {
      const account = await mintNFT();
      setName(account);
    }
    fetchAccount();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  async function handleMint() {
    try {
      await mintNFT(name);
      toast.success("NFT minted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Container>
      <h1>Mint NFT</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <Button variant="primary" onClick={handleMint}>
          Mint
        </Button>
      </form>
    </Container>
  );
}

export default Mint;
