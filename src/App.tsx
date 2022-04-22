import { FormEvent, useEffect, useState } from "react";
import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { PhotoType } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";

function App() {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<PhotoType[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  };

  const handleDeletePhoto = async (name: string) => {
    await Photos.deletePhoto(name);
    setPhotos(await Photos.getAll());
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          {uploading && "Enviando"}
          <input type="submit" value="Enviar" />
        </C.UploadForm>

        {loading && (
          <C.SreenWarning>
            <div className="emoji">✋</div>
            <span>Carregando...</span>
          </C.SreenWarning>
        )}

        {!loading && photos.length === 0 && (
          <C.SreenWarning>
            <div className="emoji">😕</div>
            <span>Não há nada para exibir aqui</span>
          </C.SreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem
                key={index}
                url={item.url}
                name={item.name}
                onDelete={handleDeletePhoto}
              />
            ))}
          </C.PhotoList>
        )}
      </C.Area>
    </C.Container>
  );
}

export default App;
