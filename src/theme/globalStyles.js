// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
	:root {
		--margin: 5%;
		--full-width: 100vw;
		--full-height: 100vh;
		--primary: #e2718d;
		--secondary: #71e2a6;
		--tertiary: #e9b921;
		--white: #ffffff;
		--gray: #f6f6f8;
	}

	body {
		margin: 0;
		padding: 0;
		background: var(--secondary);
		font-family: Open-Sans, Helvetica, Sans-Serif;
		overflow: hidden;
	}
`;
 
export default GlobalStyle;