import { Input } from '@mui/icons-material';
import 'materialize-css';
import styled from 'styled-components';
import Colors from '../../../assets/style/Colors';
import { Icons } from '../icon/Icons';

export const ChooseColorControl = styled.div`
    width: 100%;
    margin: 0 auto;
    .input-field{
        width: 100%;
        input{
            border: 1px solid ${Colors.grey} !important; 
            border-radius: 50px !important;
            background-image:url('${Icons.Calendar}'); 
            background-size: 30px;
            background-repeat: no-repeat;
            background-position: center right;
        }
        
    }
`;


interface ChooseColorWrap {
    label?: string | undefined;
}

export default function ChooseColor({
    label
}: ChooseColorWrap) {
    return <ChooseColorControl>
                <input type="color" name="favcolor" value="#0Da1c7"></input>
            </ChooseColorControl>
}