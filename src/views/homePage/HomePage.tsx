import Filter from "../../components/Filter/Filter";
import Card from "../../components/card/Card";
import AlertItem from "../../components/Alert/Alert";
import useHomePage from "./useHomePage";
import { alertType, HomePageTypes } from "./HomePageTypes";

const HomePage = (props: alertType) => {
  const { product, data } = useHomePage();

  return (
    <div className="container p-2 md:p-0 m-auto mt-2 md:mt-10 dark:text-white min-h-[60vh] overflow-hidden">
      <AlertItem refAlert={props.alertRef} />
      <Filter />
      {data[0] ? (
        <div className="relative">
          <div className="animate-spin border border-l-orange-500 border-t-orange-500 border-b-orange-500 w-7 h-7 rounded-full absolute left-1/2 top-1/2"></div>
        </div>
      ) : (
        ""
      )}
      {product.length > 0 ? (
        <div className="cards p-2 grid gap-2 md:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product.map((el: HomePageTypes, idx: number) => {
            return (
              <Card
                refAlert={props.alertRef}
                id={el.id}
                item={el}
                outStock={el.availablility}
                key={idx}
                img={el.image}
                title={`${el.title_en} - ${el.title_ar}`}
                price={el.price}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center mt-5 dark:text-white">No Items</div>
      )}
    </div>
  );
};
export default HomePage;
