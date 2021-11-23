import "./App.css";

import stadium from './img/5550448.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

import Dashboard from "./components/dashboard/index";
import Scoreboard from "./components/scoreboard/index";

function App() {
  let history = useHistory();

  return (
    <>
      <div style={{
        backgroundImage: "url(" + stadium + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
      }}>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React Login project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Scoreboard
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    history.push("/admin");
                  }}
                >
                  Dashboard
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/admin" component={Dashboard} />

          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;
