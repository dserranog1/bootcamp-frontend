import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GitGrid } from "./GitGrid";

export type categoryType = {
  name: string;
  imageTitle?: string;
};

const HelloWorld = () => {
  const [categorias, setCategorias] = useState<categoryType[]>([
    { name: "One Punch" },
    { name: "Dragon Ball" },
    {
      name: "Avatar airbending",
      imageTitle: "Avatar el grandioso",
    },
  ]);

  console.log(
    "🚀 ~ file: HelloWord.jsx:6 ~ HelloWord ~ categorias",
    categorias
  );
  const agregarCategorias = (newCategory: categoryType): void => {
    setCategorias([...categorias, newCategory]);
  };
  return (
    <div className="flex flex-col items-center gap-6 bg-blue-100 pt-6">
      <AddCategory onNewCategory={agregarCategorias} />
      <ol>
        {categorias.map((category) => {
          return <GitGrid key={category.name} category={category} />;
        })}
      </ol>
    </div>
  );
};

export default HelloWorld;
