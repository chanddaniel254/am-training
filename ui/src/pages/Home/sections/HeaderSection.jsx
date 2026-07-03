const HeaderSection = ({ basket }) => {
  return (
    <div className=" bg-black text-white px-5 py-3 flex items-center justify-between">
      <h1 className=" font-semibold">AM Training</h1>

      <div className=" text-xl flex items-center gap-2">
        <p className=" text-sm">Welcome daniel,</p>
        <span className=" relative">
          🧺{" "}
          {basket.length ? (
            <div className=" absolute top-0 -right-2 bg-red-600 flex items-center justify-center text-white rounded-full w-4 text-[10px] h-4">
              {basket.length}
            </div>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default HeaderSection;
