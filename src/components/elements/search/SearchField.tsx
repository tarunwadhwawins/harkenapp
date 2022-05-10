import { Icon, TextInput } from "react-materialize";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";

const SearchBox = styled.div`
    width:100%;
    max-width: 360px;
    *{
        box-sizing: border-box;
    }
    .input-field{
        padding: 0;
        width:100%;
        i{
            color: ${Colors.blue} !important;
            font-size: 24px !important;
            top: 13px !important;
            left: 2px;
            &:active{
                color: ${Colors.blue}; 
            }
        }
        input{
            margin-left: 0 !important;
            width: 100% !important;
            padding-left: 40px;
            box-sizing: border-box;
            border-bottom: 1px solid ${Colors.grey};
            border-radius: 0px;
            margin-bottom: 0 !important;
            font-family: 'montserrat_lightregular',sans-serif !important;
            &:focus{
                border-bottom: 1px solid ${Colors.blue} !important;
            }
        }
    }
    
`;

interface SearchField {
    // onClick?: (() => void) | undefined;
    placeholder?: string | undefined;
    icon?: any;
}
export default function SearchFieldWrap({
    placeholder,
    icon,
 }: SearchField) {
    return <SearchBox className="search"><TextInput id="TextInput-78" placeholder={placeholder} icon={icon} /></SearchBox>;
 }