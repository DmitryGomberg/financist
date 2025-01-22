import styled from 'styled-components';
import { colors } from 'styles/vars';

export const AsideContainer = styled.div`
	flex: 0 0 350px;
	border-right: 1px solid ${colors.gray};
	padding: 30px 0;
	@media (max-width: 1366px) {
		flex: 0 0 235px;
	}
`;
export const AsideLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-bottom: 20px;
`;
export const AsideLink = styled.div<{ active?: boolean }>`
	position: relative;
	align-self: flex-start;

	&::after {
		content: '';
		position: absolute;
		bottom: 4px;
		z-index: -1;
		width: 100%;
		height: 4px;
		right: 0;
		border-radius: 1px;
		background-color: ${colors.accentGreen};
		display: ${({ active }) => active ? 'flex' : 'none'};
	}

	& a {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	& span {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: red;
		color: white;
		font-size: 14px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
export const AsideButtons = styled.div`padding-top: 20px;
	border-top: 1px solid ${colors.gray};
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: flex-start;
`;