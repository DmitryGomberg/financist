import styled from 'styled-components';
import { colors } from 'styles/vars';

export const UiTableContainer = styled.table`
	width: 100%;
	border-collapse: collapse;
	overflow: hidden;
`;

export const UiTableHeader = styled.th`
	border: 1px solid ${colors.blue};
	padding: 8px;
	background-color: ${colors.accentGreen};
	text-align: left;
`;

export const UiTableRow = styled.tr`
	&:nth-child(even) {
		background-color: #f9f9f9;
	}
`;

export const UiTableCell = styled.td`
	border: 1px solid ${colors.blue};
	padding: 8px;
`;