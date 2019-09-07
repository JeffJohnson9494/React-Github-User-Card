import React from 'react';

import { Container, Row } from 'shards-react';


const Header = () => {
  return (
    <>
      <Container fluid={true} className="header">
        <Row className="headerNav">
          <div className="headerTitle"> GitHub Pros </div>
        </Row>
      </Container>
    </>
  )
}

export default Header;