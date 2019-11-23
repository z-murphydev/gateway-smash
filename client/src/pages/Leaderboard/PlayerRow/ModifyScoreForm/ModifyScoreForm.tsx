import React, { useState, useRef } from "react";

import { INCREASE_SCORE, DECREASE_SCORE } from "Store";
import { Form, Input, ButtonGroup, Button } from "elements";

interface Props {
  _id: string;
  modifyScore: ({
    _id,
    score,
    action
  }: {
    _id: string;
    score: number;
    action: string;
  }) => void;
}

const ModifyScoreForm: React.FC<Props> = ({ _id, modifyScore }) => {
  const [formAction, setFormAction] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (!inputRef) {
      return;
    }
    if (!inputRef.current) {
      return;
    }

    modifyScore({
      _id,
      action: formAction,
      score: parseInt(inputRef.current.value)
    });
  };

  return (
    <>
      <Form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {formAction && (
          <>
            <Input
              ref={inputRef}
              placeholder={`Enter amount to ${
                formAction === INCREASE_SCORE ? "increase" : "decrease"
              } score by`}
            />
            <Button type="submit">Save Changes</Button>
          </>
        )}
      </Form>
      <ButtonGroup>
        <Button
          onClick={() =>
            setFormAction(formAction === INCREASE_SCORE ? "" : INCREASE_SCORE)
          }
        >
          +
        </Button>
        <Button
          onClick={() =>
            setFormAction(formAction === DECREASE_SCORE ? "" : DECREASE_SCORE)
          }
        >
          -
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ModifyScoreForm;
