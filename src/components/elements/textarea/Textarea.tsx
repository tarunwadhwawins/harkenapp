import 'materialize-css';
import { Textarea, TextInput } from 'react-materialize';
import styled from 'styled-components';
import Colors from '../../../assets/style/Colors';

export const TextareaControl = styled.div`
    textarea{
        border-bottom: 1px solid ${Colors.grey} !important;  
        box-sizing: border-box  !important;
        padding: 10px !important;
        border-radius: 0px !important;
        min-height: 100px;
        max-height: 100px;
        overflow-y: auto;
        &:focus{
            border-bottom: 1px solid ${Colors.blue} !important;
        }
    }
    label{
        font-size: 14px !important;
        text-transform: none !important;
        left: 0px !important;
        color: ${Colors.lightgrey} !important;
        &.active{            
            text-transform: uppercase;
            left: 0px !important;
            margin-top: -5px;
        }

    }
`;


interface TextareaWrap {
    label?: string | undefined;
}

export default function Textareafield({
    label
}: TextareaWrap) {
    return <TextareaControl><Textarea label={label}
    id="Textarea-37"
    l={12}
    m={12}
    s={12}
    xl={12}
  /></TextareaControl>
}