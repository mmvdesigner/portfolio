import SectionTitle from '../SectionTitle';
import SobreItem from './SobreItem';
import { Container } from './styles';

function Sobre() {
  return (
    <Container>
      <SectionTitle title="Sobre" description="Minha trajetória..." />

      <section>
        <SobreItem
          title="Formação"
          description="Sou fascinado por tecnologia, sempre fui curioso em saber como acontece as coisas por tras daquilo que vemos, seguindo esse instinto, e tentando saciar essa cuirosidade, ingressei e fui fazendo diversos cursos na área de TI, atualmente estudo Análise e Desenvolvimento de Sistemas."
        />
        <SobreItem
          title="O que eu faço"
          description="Eu projeto e desenvolvo sites estáticos, landpages, sites dinâmicos, lojas virtuais, sistemas web personalizados de acordo com sua necessidade."
        />
        <SobreItem
          title="Infra"
          description="Provisiono servidor com todas as configurações pra hospedagem das paginas que serão exibidas no seu navegador. Otimizando para que a aplicação esteja em alta disponibilidade, usando os recuros disponíveis para escalar."
        />
        <SobreItem
          title="Dev Front-end & Back-end"
          description="O front seria a parte visual, o que se vê nos sites, fora construido atraves de codigos, já o back end é quem faz a interação, é o que ta por trás das requisições a banco de dados, todas as interações que operam de forma dinâmica."
        />
      </section>
    </Container>
  );
}

export default Sobre;
