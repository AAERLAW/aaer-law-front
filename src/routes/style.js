import styled from 'styled-components';
import { Theme } from '../utils/theme';

export const HeaderNav = styled.ul`
	list-style: none;
	display: flex;
	margin: 0 0 0 auto;

	> li {
		font-size: 20px;
		font-weight: 600;
		color: ${Theme.PrimaryColor};
		margin: auto 25px;
		cursor: pointer;
	}
`;
