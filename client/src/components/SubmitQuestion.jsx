import React from 'react';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';

const SubmitQuestion = () => (
  <div>
    <h3>Submit a question you think will test other reader&apos;s comprehension</h3>
    <Form>
      <FormGroup>
        <Label>Question: (Limit 1000 characters)</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label>Correct Answer:</Label>
        <Input
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label>Wrong Answer 1:</Label>
        <Input
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label>Wrong Answer 2:</Label>
        <Input
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label>Wrong Answer 3:</Label>
        <Input
          type="text"
        />
      </FormGroup>
      <Button>Sumbit Question</Button>
    </Form>
  </div>
);

export default SubmitQuestion;
