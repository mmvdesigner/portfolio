import { ItemContainer } from './styles';

interface SobreProps {
  year: string;
  title: string;
  description: string;
}

export default function SobreItem({
  title,
  description
}: SobreProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
