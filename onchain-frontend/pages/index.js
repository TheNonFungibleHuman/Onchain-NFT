import { Head } from "next/head";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>onchain-nft-app</title>
      </Head>
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">onchain-nft-app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/mint">
                  <a className="nav-link">Mint NFT</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Container>
        <h1>Welcome to onchain-nft-app</h1>
      </Container>
    </div>
  );
}
