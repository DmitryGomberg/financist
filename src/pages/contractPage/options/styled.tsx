import styled from 'styled-components';
import { colors } from 'styles/vars';

export const ContractPageOptionsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 5px;
	align-self: flex-start;
`;
export const ContractPageOptionsItem = styled.div`
	& span {
		color: ${colors.accentOrange}
	}
`;