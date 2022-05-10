import { RadioGroup } from "react-materialize";
import styled from "styled-components";


const RadioBtn = styled.div`
  display: flex;
  grid-gap: 15px;
`;

interface RadioSelectWrap {
    label?: string | undefined;
    options?:any,
    onchange?:any,
    value?:string
}

export default function RadioSelect({
    label,
    options,
    onchange,
    value
}: RadioSelectWrap) {
    return <RadioBtn>
        <RadioGroup
        label={label}
        name="size"
        onChange={onchange}
        options={options}
        value={value}
      />
      </RadioBtn>
}