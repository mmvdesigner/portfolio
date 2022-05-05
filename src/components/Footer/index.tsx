import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillUpCircle
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          <AiFillUpCircle />
        </button>
        <span>© mvdevfullstack</span>
        <section>
          {/* <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com')}
          /> */}
          <AiOutlineWhatsApp
            // eslint-disable-next-line prettier/prettier
            onClick={() => handleRedirect('https://api.whatsapp.com/send?phone=5588999382994&text=Ol%C3%A1%2C%20seja%20bem%20vindo%2C%20aguarde%20um%20instante%20que%20irei%20te%20atender%2C%20obrigado!')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/mmvdesigner')}
          />
          <AiFillLinkedin
            // eslint-disable-next-line prettier/prettier
            onClick={() => handleRedirect('https://www.linkedin.com/in/messias-vasconcelos-55855932/')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
