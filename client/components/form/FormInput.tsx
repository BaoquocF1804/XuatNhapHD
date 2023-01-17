import { Input } from "antd";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import { CalendarOutlined } from "@ant-design/icons";
import { Dispatch, SetStateAction, useState } from "react";
import { useController } from "react-hook-form";
const { TextArea } = Input;

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
  .date-picker-container {
    background: white;
    position: relative;
    .date-picker {
      height: 40px;
      border-radius: 4px;
      width: 100%;
      .react-datepicker__input-container {
        height: 100%;
        input {
          width: 100% !important;
          height: 100%;
          border: 1px solid #dcdfe6;
          padding: 0 30px;
          ::placeholder {
            color: #d2c9cc;
          }
        }
      }
    }
    .placeholder-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 6px;
      color: #d2c9cc;
    }
  }
`;
const FormInput = ({
  labelString,
  inputId,
  type = "text",
  placeholder = "",
  control,
  setOuterDate,
  outerDate = new Date(),
}: {
  labelString: string;
  inputId: string;
  placeholder?: string;
  type?: "text" | "textarea" | "date" | "dropdown" | "dropdown_with_text";
  control?: any;
  setOuterDate?: Dispatch<SetStateAction<Date>>;
  outerDate?: Date;
}) => {
  const { field } = useController({
    control: control,
    name: inputId,
    defaultValue: "",
  });

  return (
    <StyledFormInput>
      <label className="form-label" htmlFor={inputId}>
        {labelString}
      </label>
      {type === "text" && (
        <input
          className="form-input"
          type="text"
          id={inputId}
          placeholder={placeholder}
          {...field}
        />
      )}
      {type === "textarea" && (
        <TextArea rows={6} placeholder={placeholder} {...field} />
      )}
      {type === "date" && (
        <div className="date-picker-container">
          <ReactDatePicker
            wrapperClassName="date-picker"
            dateFormat="dd/MM/yyyy"
            placeholderText="Ngày/Tháng/Năm"
            selected={outerDate || new Date()}
            onChange={(date: Date) => {
              if (setOuterDate) setOuterDate(date);
            }}
          />
          <div className="placeholder-icon">
            <CalendarOutlined />
          </div>
        </div>
      )}
    </StyledFormInput>
  );
};

export default FormInput;
