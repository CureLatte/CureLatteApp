'use client'

import Form from 'react-bootstrap/Form';
import styled from "styled-components";
import {CYAN_0, CYAN_1, GRAY_005, GRAY_010, GRAY_070, WHITE_GRAY_3} from "@/constant/color";



export default function ToggleSwitch({title, id}:any) {
    const CustomSwitch = styled(Form.Check)`

        .form-check-input {
            // outline: #16DBCC 1px solid;
            background-image: url('/icons/toggleCircle.svg');
            background-color: ${WHITE_GRAY_3};
        }

        // 배경 색

        .form-check-input:checked {
            background-color: ${GRAY_070};
            border-color: ${GRAY_070};
        }

        // focusing

        .form-check-input:focus {
            border-color: ${GRAY_005};
            outline: 0;
            box-shadow: 0 0 0 .2rem ${GRAY_005};
        }

    `


  return (
    <Form>
      <CustomSwitch // prettier-ignore
        type="switch"
        id="custom-switch"
        label={title}
      />
    </Form>
  );
}