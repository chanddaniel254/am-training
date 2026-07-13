import { useEffect, useState } from "react";
import BodySection from "./sections/BodySection";
import HeaderSection from "./sections/HeaderSection";

const HomePage = () => {
  const localData = localStorage.getItem("cart");

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const parsedData = localData ? JSON.parse(localData) : [];
    setBasket(parsedData);
  }, []);

  return (
    <div className=" h-screen overflow-hidden">
      <HeaderSection
        updateQty={(id, value) => {
          const newRec = [...basket];
          const index = newRec.findIndex((f) => f.id === id);

          if (index === -1) return;

          newRec[index].qty = value + (newRec[index].qty ?? 0);

          setBasket(newRec);
        }}
        basket={basket}
      />
      <BodySection
        basket={basket}
        setItem={(value) => {
          setBasket([...basket, value]);
          localStorage.setItem("cart", JSON.stringify([...basket, value]));
        }}
        removeItem={(value) => {
          const newProducts = basket.filter((item) => item.id !== value);
          setBasket(newProducts);
          localStorage.setItem("cart", JSON.stringify(newProducts));
        }}
      />
    </div>
  );
};

export default HomePage;
