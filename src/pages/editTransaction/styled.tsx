import styled from 'styled-components';
import { BorderContainer } from '../../styled';

export const EditTransactionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 760px;
	width: 100%;
	align-items: flex-start;
	gap: 15px;
`;
export const EditTransactionPageType = styled(BorderContainer)``;
export const EditTransactionPageLine = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	width: 100%;

	& > div:last-child {
		flex: 1 1 auto;
	}

	& > div:first-child {
		flex: 0 0 120px;
	}

	& > div:nth-child(2) {
		flex: 0 0 200px;
	}
`;