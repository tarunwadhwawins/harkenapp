import { RadioGroup } from "react-materialize";
import styled from "styled-components";
import { Checkbox } from 'react-materialize';


const CheckboxBtn = styled.div`
  display: flex;
  grid-gap: 15px;
`;

interface CheckboxWrap {
  label: string;
  value: string;
  id?: any;
}

export default function CheckBoxWithLabel({
  label,
  value,
  id
}: CheckboxWrap) {
  return <CheckboxBtn>
    <Checkbox
      id={id}
      label={label}
      value={value}
    />
  </CheckboxBtn>
}