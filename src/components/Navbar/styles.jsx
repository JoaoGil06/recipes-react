import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 5rem 0 5rem;
	background: #3a3a3a;
`;
export const NavbarLogo = styled.div`
	font-size: 2rem;
	font-weight: bold;

	a {
		color: #fff;
	}
`;
export const NavbarNav = styled.div`
	ul {
		display: flex;
		list-style-type: none;
	}

	ul li {
		font-size: 1.2rem;

		&:not(:last-child) {
			margin-right: 5rem;
		}

		a {
			color: #fff;
		}
	}
`;
