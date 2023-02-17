import { useState } from "react";
import { categoryType } from "./HelloWorld";

export const AddCategory = ({
  onNewCategory,
}: {
  onNewCategory: (newCategory: categoryType) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("🚀 ~ file: AddCategory.jsx:8 ~ onInputChange ~ e", e);
    setInputValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory({ name: inputValue.trim() });
    setInputValue("");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        className="w-96 rounded-md border-2 border-black p-2"
        type="text"
        value={inputValue}
        placeholder="Buscar Gifs"
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};
