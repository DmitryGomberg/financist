import styled from 'styled-components';
import { colors } from 'styles/vars';

export const FilterContainer = styled.div`
	padding: 10px 20px;
	border-radius: 10px;
	border: 1px solid ${colors.gray};
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: relative;

	& button {
		position: absolute;

		bottom: 10px;
		right: 20px;
		align-self: flex-end;
	}
`;
export const FilterLine = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 15px;

	& > div:last-child {
		flex: 1 1 auto;
	}
`;
export const FilterBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;


`;
export const FilterLabel = styled.div``;