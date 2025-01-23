import styled from 'styled-components';
import { BorderContainer } from '../../styled';

export const AnalyticsPageContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px
`;
export const AnalyticsPagePeriod = styled(BorderContainer)`
	&& {
		display: flex;
		gap: 20px
	}
`;
export const AnalyticsPageBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
export const AnalyticsPagePeriodLine = styled.div`
	display: flex;
	gap: 20px
`;