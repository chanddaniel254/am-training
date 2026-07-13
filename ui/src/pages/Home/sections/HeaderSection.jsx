import { Modal } from "antd";
import { useState } from "react";

const HeaderSection = ({ basket, updateQty }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = basket.reduce(
    (prev, current) => prev + current.price * (current.qty ?? 1),
    0,
  );

  return (
    <div className=" bg-black text-white px-5 py-3 flex items-center justify-between">
      <h1 className=" font-semibold">AM Training</h1>

      <div className=" text-xl flex items-center gap-2">
        <p className=" text-sm">Welcome daniel,</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className=" relative cursor-pointer hover:scale-105"
        >
          🧺{" "}
          {basket.length ? (
            <div className=" absolute top-0 -right-2 bg-red-600 flex items-center justify-center text-white rounded-full w-4 text-[10px] h-4">
              {basket.length}
            </div>
          ) : null}
        </button>
      </div>
      <Modal
        title="Checkout"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={() => {}}
        onCancel={() => setIsModalOpen(false)}
      >
        <div>
          {basket.map((item, indx) => (
            <div className=" grid grid-cols-3">
              <p>
                {" "}
                {indx + 1}. {item.title} -{" "}
              </p>
              <span className="text-sm text-gray-600 text-center">
                <button
                  disabled={item.qty === 1}
                  className={item.qty === 1 && "opacity-55"}
                  onClick={() => updateQty(item.id, -1)}
                >
                  ⬅️
                </button>{" "}
                {item.qty ?? 1}{" "}
                <button
                  disabled={item.qty > 9}
                  className={item.qty > 9 && "opacity-55"}
                  onClick={() => updateQty(item.id, 1)}
                >
                  ➡️
                </button>
              </span>
              <span className=" font-semibold text-lg text-right">
                ${item.price}
              </span>
            </div>
          ))}
          <hr></hr>
          <div className=" grid grid-cols-2">
            <div>Total</div>
            <div className=" text-right font-semibold text-lg">
              ${total.toFixed(2)}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HeaderSection;
