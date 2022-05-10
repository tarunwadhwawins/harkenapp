import { TextInput } from "react-materialize";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";

const UploadButton = styled.div`
    .input-field {
        max-width: 100%;
        margin: 14px auto;
        padding: 0;
        width: 100%;
        display: flex;
        grid-gap: 30px;
        .btn{
            min-width: 100px;
            background-color: ${Colors.blue};
        }
        .file-path-wrapper{
            width: 100%;
            position: relative;
            &:before{
                position: absolute;
                content: "Upload file";
                z-index: 1;
                top: 15px;
                opacity: 0.5;
            }
            input{
                &.valid{
                    background-color: ${Colors.white};
                    position: relative;
                    z-index: 9;
                }
            }
        }
    }
    
`;

interface UploadBtn {
    buttonText?: string | undefined;
    icon?: any;
    placeholder?: string | undefined;
}



export default function UploadFileButton({
    buttonText,
    placeholder
 }: UploadBtn) {
    return <UploadButton><TextInput id="TextInput-26" label="File" type="file" placeholder={placeholder}/></UploadButton>;
 }