import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
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
        <Footer />
      </div>
      );
      <Container>
        <h1>Welcome to onchain-nft-app</h1>
      </Container>
    </div>
  );
}
