import { Row, Col, Container, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../components/CartItemComponent";
const CartItems = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup varient="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>

          <Alert variant="info">Your cart is empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 Items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price <span className="fw-bold ">$231</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/order-Details">
                <Button type="button">Proceed to Checkout</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItems;
