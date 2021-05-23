import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();

  const onSubmitHandler = evt => {
    evt.preventDefault();
    const enteredAmt = +inputRef.current.value.trim();

    if (enteredAmt <= 0 || enteredAmt > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddClick(enteredAmt);
  };

  const inputProps = {
    id: `amount_${props.id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1"
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input label="Amount" input={inputProps} ref={inputRef} />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p> Please enter a value between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
