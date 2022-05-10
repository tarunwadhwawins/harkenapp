import 'materialize-css';
import { TextInput } from 'react-materialize';
import { AnyFn } from 'react-materialize/lib/utils';
import styled from 'styled-components';
import Colors from '../../../assets/style/Colors';

export const InputFromControl = styled.div`
    width: 100%;
    input{
        border-bottom: 1px solid ${Colors.grey} !important;  
        box-sizing: border-box  !important;
        padding: 10px !important;
        border-radius: 0px !important;
        &:focus{
            border-bottom: 1px solid ${Colors.blue} !important;
        }
    }
    label{
        font-size: 14px !important;
        left: 0px !important;
        color: ${Colors.lightgrey}  !important;
        text-transform: none !important;
        font-family: 'montserrat_lightregular',sans-serif !important;
        &.active{    
            // left: 0px !important;
            margin-top: -5px;  
            transform: translateY(-14px) scale(0.9) !important;
            -webkit-transform: translateY(-14px) scale(0.9) !important;
            -moz-transform: translateY(-14px) scale(0.9) !important;
        }

    }
`;


interface InputLabel {
    label?: string | undefined;
    value?: string | undefined;
    placeholder?: string | undefined;
    icon?: any;
}

export default function InputLabelfield({ 
    label,
    value,
    icon,
    placeholder
    
}: InputLabel) {
    return <InputFromControl className="textField"><TextInput label={label} value={value} icon={icon} placeholder={placeholder}/></InputFromControl>
}