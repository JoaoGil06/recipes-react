import { FooterContainer } from './styles';

const Footer = () => {
	return <FooterContainer className='footer'>{new Date().getFullYear()}</FooterContainer>;
};

export default Footer;
