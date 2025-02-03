import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    h1{
        font-size:70px;
        font-weight: 800;
        color: navy;
    }
`;

export default GlobalStyle;
