import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	${({ theme }) => theme.containerWidth};

	> div {
		border-top: 1px solid ${({ theme }) => theme.colors.blueGray};
		color: ${({ theme }) => theme.colors.blueGrayShades50};
		font-weight: 400;
		margin: 0 1rem;
		padding: 2rem 0;
	}
`;
