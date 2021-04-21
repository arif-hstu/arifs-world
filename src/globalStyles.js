// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body, 
	html, 
	#root {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background: teal;
		font-family: Open-Sans, Helvetica, Sans-Serif;
	}
`;

export default GlobalStyle;

