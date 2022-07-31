import { Col, Container, Row } from "react-bootstrap";
import Result from "./Result";

export default function Results() {
    return (
        <Container>
            <Row>
                <Col>
                    <Result os="Android" data={[]}/>
                </Col>
                <Col>
                    <Result os="iOS" data={[]}/>
                </Col>
            </Row>
        </Container>
    )
}