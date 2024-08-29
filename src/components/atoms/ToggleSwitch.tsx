'use client'

import Form from 'react-bootstrap/Form';
import styled from "styled-components";
import {CYAN_0, CYAN_1, WHITE_GRAY_3} from "@/constant/color";



export default function ToggleSwitch({title, id}:any) {
    const CustomSwitch = styled(Form.Check)`

        .form-check-input {
            // outline: #16DBCC 1px solid;
            background-image: url('/icons/toggleCircle.svg');
            background-color: ${WHITE_GRAY_3};
        }

        // 배경 색

        .form-check-input:checked {
            background-color: ${CYAN_0};
            border-color: ${CYAN_0};
        }

        // focusing

        .form-check-input:focus {
            border-color: ${CYAN_0};
            outline: 0;
            box-shadow: 0 0 0 .25rem ${CYAN_1};
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