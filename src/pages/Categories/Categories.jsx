import React from "react";

const products = [
  { name: "asdas", id: 1, category: "x" },
  { name: "asdas", id: 2, category: "xx" },
  { name: "asdas", id: 3, category: "xxxx" },
  { name: "asdas", id: 4, category: "xx" },
  { name: "asdas", id: 5, category: "xxxxx" },
  { name: "asdas", id: 6, category: "xxx" },
];

const Categories = () => {
  return (
    <div>
      <h1>Categorias</h1>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};

export default Categories;
