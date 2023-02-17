import { useEffect, useState } from "react";
import type { categoryType } from "./HelloWorld";

type gifsResponse = {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}[];

type gif = {
  id: string;
  title: string;
  url: string;
};

export const GitGrid = ({ category }: { category: categoryType }) => {
  const [valueImg, setValueImg] = useState<gif[]>([]);
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ttl4VAZ6oqqGkgvX7Kh1zXR2QOibn6ZA&q=${category.name}&limit=20`;
    const resp = await fetch(url);
    const { data }: { data: gifsResponse } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    setValueImg(gifs);
  };
  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div className="my-6 flex flex-col items-center gap-2">
      <h2>{category.imageTitle ? category.imageTitle : valueImg[0]?.title}</h2>
      <img
        className="rounded-md border-4 border-black"
        src={valueImg[0]?.url}
        alt={valueImg[0] ? valueImg[0].title : "Imagen default"}
      />
    </div>
  );
};
