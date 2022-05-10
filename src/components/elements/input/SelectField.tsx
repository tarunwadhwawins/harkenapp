import { Select } from "react-materialize";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";

const SelectOption = styled.div`
  input{
    border-bottom: 1px solid ${Colors.grey} !important;  
    box-sizing: border-box  !important;
    padding: 10px !important;
    color: ${Colors.darkblue} !important;
    font-size: 14px !important;
    border-radius: 0px !important;
    font-family: 'montserrat_lightregular' !important;
    padding: 0 22px 0 0 !important;
    &:focus{
      border-bottom: 1px solid ${Colors.blue} !important;
    }
  }
  label{
    font-size: 11px;
    font-family: 'montserrat_lightregular',sans-serif;
    left: 0 !important;
    margin-top: -5px;
    color: ${Colors.lightgrey} ;
    text-transform: none !important;
  }
`;


interface SelectFieldWrap {
  label?: string | undefined;
  option?: any;
}

export default function SelectField({
  label,
  option = []
}: SelectFieldWrap) {
  return <SelectOption>
    <Select
      id="Select-16"
      label={label}
      multiple={false}
      options={{
        classes: '',
        dropdownOptions: {
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          outDuration: 250
        }
      }}
      value="1"
    >
      {
        option.map((opt: any, i: number) => (
         <option value={opt.value} key={i} label={opt.label}>{opt.label}</option>
        ))
      }

    </Select>
  </SelectOption>
}