import data from "../data/products.json";

export const pedirData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((el) => el.id === id);

    if (item) {
      resolve(item);
    } else {
      reject({
        error: "no se encontro el producto",
      });
    }
  });
};
