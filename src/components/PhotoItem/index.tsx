import * as C from "./styles";

type Props = {
  name: string;
  url: string;
  onDelete: (name: string) => void;
};

export const PhotoItem = ({ url, name, onDelete }: Props) => {
  return (
    <C.Container>
      <button onClick={() => onDelete(name)}>🗑️</button>
      <img src={url} alt={name} />
      <p>{name}</p>
    </C.Container>
  );
};
