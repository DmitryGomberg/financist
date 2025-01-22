import styled from 'styled-components';
import { BorderContainer } from '../../styled';

export const EditContractPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	gap: 15px;
`;
export const EditContractPageType = styled(BorderContainer)``;
export const EditContractPageLine = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	width: 100%;
	max-width: 730px;

	& > div {
		flex: 1 1 auto;
		width: 100%;
	}
`;