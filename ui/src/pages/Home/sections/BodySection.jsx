import { useQuery } from "@tanstack/react-query";
import { Tooltip } from "antd";

const truncateString = (value) => {
  if (value.length > 20) {
    return `${value.slice(0, 20)} ... see more`;
  }

  return value;
};

const BodySection = () => {
  const products = localStorage.getItem("carts");

  const parsedProducts = products ? JSON.parse(products || []) : [];

  const { isPending, error, data } = useQuery({
    queryKey: ["productData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isPending) return <>loading</>;
  if (error) return <>{error.message}</>;

  return (
    <div
      style={{ height: `calc(100% - 60px)` }}
      className=" grid grid-cols-4 overflow-y-auto gap-5 p-5"
    >
      {data.map((item) => (
        <div
          key={item.id}
          className=" bg-amber-100 flex flex-col justify-between"
        >
          <div className=" px-5 pt-5">
            <div className=" flex items-center justify-center">
              <img className=" h-32" src={item.image} />
            </div>
            <h1>{item.title}</h1>

            <h1 className=" font-semibold">
              $ {item.price} {item.price > 100 ? "👑" : ""}
            </h1>

            <Tooltip arrow={false} title={item.description}>
              <h1 className=" text-gray-500 text-sm">
                {truncateString(item.description)}
              </h1>
            </Tooltip>
            <h1>{item.category}</h1>
          </div>
          {parsedProducts.includes(item.id) ? (
            <button
              onClick={() => {
                const newProducts = parsedProducts.filter(
                  (product) => product !== item.id,
                );

                localStorage.setItem("carts", JSON.stringify(newProducts));
                window.location.reload();
              }}
              className=" cursor-pointer hover:opacity-100 opacity-65 text-center py-2 bg-red-100 text-red-500 px-5 w-full"
            >
              Exclude From Cart
            </button>
          ) : (
            <button
              onClick={() => {
                const newProducts = [...parsedProducts, item.id];

                localStorage.setItem("carts", JSON.stringify(newProducts));
                window.location.reload();
              }}
              className=" cursor-pointer hover:opacity-100 opacity-65 text-center py-2 bg-green-100 text-green-500 px-5 w-full"
            >
              Add To Card
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BodySection;
