import { AiFillHtml5, AiOutlineAntCloud, AiOutlineCloudServer } from 'react-icons/ai';
import { FaAws, FaCss3Alt, FaJava, FaLinux, FaPhp, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
      </section>
      <section>
        <ConhecimentoItem title="PHP" icon={<FaPhp />} />
        <ConhecimentoItem title="Java" icon={<FaJava />} />
        <ConhecimentoItem title="Cloud" icon={<AiOutlineCloudServer />} />
        <ConhecimentoItem title="Linux" icon={<FaLinux />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
