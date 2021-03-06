import React, { useState } from "react";

import { useForm, useTitle } from "hooks";
import { Form, Input, Card, Button } from "elements";

interface Props {}

const Register: React.FC<Props> = () => {
  useTitle("Register Player");
  const [formWasSuccessful, setFormWasSuccessful] = useState<boolean | null>(
    null
  );
  const { values, handleChange, resetForm } = useForm({
    firstName: "",
    lastName: "",
    tag: "",
    main: ""
  });

  const handleSubmit = async () => {
    try {
      const response: Response = await fetch("/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      const { status } = response;

      if (status === 400 || status === 500) {
        return setFormWasSuccessful(false);
      }

      setFormWasSuccessful(true);
    } catch (error) {
      setFormWasSuccessful(false);
    } finally {
      resetForm();
    }
  };

  return (
    <Card>
      {formWasSuccessful !== null && (
        <Card success={formWasSuccessful} danger={!formWasSuccessful}>
          {formWasSuccessful
            ? "User was successfully added!"
            : "Whoops, something went wrong..."}
        </Card>
      )}
      <Form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {Object.keys(values).map(value => (
          <Input
            value={values[value]}
            name={value}
            onChange={handleChange}
            key={value}
            placeholder={value}
            required
          />
        ))}
        <Button type="submit">Register</Button>
      </Form>
    </Card>
  );
};

export default Register;
