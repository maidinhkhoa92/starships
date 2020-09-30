import React from 'react';
import { Table, Spinner, Form, Button, Col, Container } from 'react-bootstrap';
import _ from 'lodash';
import { Formik } from 'formik';

export default ({ loading, list, onSubmit, initialValues }) => (
  <Container>
    <Formik onSubmit={onSubmit} initialValues={initialValues} enableReinitialize>
      {
        props => (
          <Form onSubmit={props.handleSubmit} className="mb-4">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Cargo capacity</Form.Label>
                <Form.Control name="cargo_capacity.from" onChange={props.handleChange} value={props.values.cargo_capacity.from} as="select" defaultValue="From..." className="mb-2">
                  <option value="0">0</option>
                  <option value="100000">100000</option>
                  <option value="3000000">3000000</option>
                  <option value="36000000">36000000</option>
                  <option value="1000000000000">1000000000000</option>
                </Form.Control>
                <Form.Control name="cargo_capacity.to" onChange={props.handleChange} value={props.values.cargo_capacity.to} as="select" defaultValue="To...">
                  <option value="0">0</option>
                  <option value="100000">100000</option>
                  <option value="3000000">3000000</option>
                  <option value="36000000">36000000</option>
                  <option value="1000000000000">1000000000000</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Hyperdrive rating</Form.Label>
                <Form.Control name="hyperdrive_rating.from" onChange={props.handleChange} value={props.values.hyperdrive_rating.from} as="select" defaultValue="From..." className="mb-2">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Control>
                <Form.Control name="hyperdrive_rating.to" onChange={props.handleChange} value={props.values.hyperdrive_rating.to} as="select" defaultValue="To...">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )
      }
    </Formik>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Model</th>
          <th>Manufacturer</th>
          <th>Cargo capacity</th>
          <th>Hyperdrive rating</th>
        </tr>
      </thead>
      {loading ? <Spinner /> : <tbody>
        {
          _.map(list, (item, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{item.name}</td>
              <td>{item.model}</td>
              <td>{item.manufacturer}</td>
              <td>{item.cargo_capacity}</td>
              <td>{item.hyperdrive_rating}</td>
            </tr>
          ))
        }

      </tbody>}
    </Table>
  </Container>
)