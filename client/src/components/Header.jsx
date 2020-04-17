import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from 'react';
import {
    Button,
    Alignment,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Doc Deploy</Navbar.Heading>
                <Navbar.Divider />
                <Link to="/">
                    <Button className="bp3-minimal" icon="home" text="Home" />
                </Link>
            </Navbar.Group>
        </Navbar>
      </div>
    );
  }
}

export default App;