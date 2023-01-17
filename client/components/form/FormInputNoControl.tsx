import { ChangeEvent } from "react";
import styled from "styled-components";

const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  .form-label {
    padding-bottom: 10px;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 600;
  }
  .form-input {
    background: white;
    border: none;
    outline: none;
    border: 1px solid #dbdbdb;
    color: black;
    padding: 12px;
    border-radius: 4px;
    ::placeholder {
      color: #d2c9cc;
    }
    :focus {
      border-color: #4096ff;
    }
  }
`;
const FormInputNoControl = ({
  labelString,
  type = "text",
  placeholder = "",
  handleInput = () => {},
}: {
  labelString: string;
  placeholder?: string;
  handleInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "textarea" | "date" | "dropdown" | "dropdown_with_text";
}) => {
  return (
    <StyledFormInput>
      <label className="form-label">{labelString}</label>
      {type === "text" && (
        <input
          onChange={handleInput}
          className="form-input"
          type="text"
          placeholder={placeholder}
        />
      )}
    </StyledFormInput>
  );
};

export default FormInputNoControl;
