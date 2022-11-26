import { faSearch, faPerson, faLaugh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function AppNav() {
  return (
    <Navbar bg="primary" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="/">Dismore</Navbar.Brand>
        <Navbar.Toggle aria-controls="dismore-navbar" />
        <Navbar.Collapse id="dismore-navbar" className="ml-0">
          <Nav className="me-auto">
            <Nav.Link href="/servers/explore" className="d-block">
              <FontAwesomeIcon
                icon={faSearch}
                width={20}
                className="d-none d-sm-inline"
              />{" "}
              Servers
            </Nav.Link>
            <Nav.Link href="/emojis/explore">
              <FontAwesomeIcon
                icon={faLaugh}
                width={20}
                className="d-none d-sm-inline"
              />{" "}
              Emojis
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end pl-0">
            <NavDropdown
              className="mx-0"
              title={
                <>
                  <Image
                    src={"https://picsum.photos/200"}
                    alt=""
                    width={30}
                    height={30}
                    className="rounded-circle d-none d-sm-inline"
                  />{" "}
                  <span className="d-inline d-sm-none">Account</span>
                </>
              }
            >
              <NavDropdown.Item onClick={() => alert("Log in to-do")}>
                Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
