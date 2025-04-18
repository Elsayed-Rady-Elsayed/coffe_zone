import useOrder from "./useOrder";

const Orders = () => {
  const { canselOrder, userOrder, t, i18n, userId } = useOrder();
  const ordersItems =
    userId &&
    userOrder.map((el: any, idx: number) => {
      if (!isNaN(el.price))
        return (
          <div
            key={idx}
            className={`flex flex-col  gap-3 m-2 ${
              i18n.language === "ar"
                ? "md:flex-row-reverse md:justify-start"
                : "md:flex-row"
            } `}
          >
            <img
              className="w-full md:w-40 md:h-40 border rounded-lg"
              src={el.image}
              alt=""
            />
            <div
              className={`flex flex-col gap-1 justify-center ${
                i18n.language === "ar" ? "items-end" : "items-start"
              }`}
            >
              <p className="text-lg font-semibold">
                {el.title_en}-{el.title_ar}
              </p>
              <p className="font-bold">
                {t("le") + " "}
                {el.price * el.quantity}
              </p>
              <p>
                {el.quantity + " "}
                {t("item")}
              </p>
              <button
                className="bg-red-600 p-1 rounded-lg text-white"
                onClick={async () => {
                  canselOrder(el);
                }}
              >
                cancel order
              </button>
            </div>
          </div>
        );
    });
  return (
    <div className="container m-auto p-2  my-5 dark:text-white ">
      {!userOrder.length ? (
        <div className="text-center mt-5 dark:text-white h-[30vh]">
          No Items
        </div>
      ) : (
        ordersItems
      )}
    </div>
  );
};
export default Orders;
