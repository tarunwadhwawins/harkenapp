import 'materialize-css';
import { TextInput } from 'react-materialize';
import styled from 'styled-components';
import Colors from '../../../assets/style/Colors';
import { Icons } from '../icon/Icons';

export const FileUploadControl = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    .input-field{
        margin: 20px 0 40px;
        width: 100%;
        .btn{
            background-color: transparent;
            box-shadow: none;
            padding: 0;
            span{
                display:none;
            }
            input{
                z-index: 99;
            }
        }
        
    }
    .file-path-wrapper {
        width: 100%;
        border: 1px solid ${Colors.grey} ;  
        border-radius: 5px;
        min-height: 150px;
        background-image:url('${Icons.UploadImage}'); 
        background-size: 110px;
        background-repeat: no-repeat;
        background-position: center center; 
        filter: opacity(0.7);
        padding: 0;
        display: flex;
        align-items: center;
        input{
            border: none !important; 
            padding: 15px;
            box-sizing: border-box;
            box-shadow: none !important;
        }
    }
`;


interface ChooseFileWrap {
    label?: string | undefined;
}

export default function ChooseFile({
    label
}: ChooseFileWrap) {
    return <FileUploadControl className="chooseFile"><TextInput
    id="TextInput-26"
    label="File"
    type="file"
  /></FileUploadControl>
}