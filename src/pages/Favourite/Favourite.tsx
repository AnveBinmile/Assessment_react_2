import React, { useCallback, useContext, useEffect, useState } from "react";
import AppContext from "../../Components/Context/AppContext";
import ComponentCard from "../../Components/ComponentCard/ComponentCard";
import { trendingCards } from "../../Components/utils/constants/DummyData";

const Favourite = () => {
  const data = useContext(AppContext);

  if (data === null) return <div></div>;

  const { favArray } = data;

  const [length, setlength] = useState(favArray.length);
  console.log(length);

  const newArray = trendingCards.filter((item) => item.favourite === true);

  useEffect(() => {}, [favArray.length, trendingCards, newArray]);

  return (
    <div className="flex flex-row p-12 gap-[20px] overflow-hidden sm:overflow-scroll">
      {newArray.map((item) => {
        return (
          <ComponentCard
            setlength={setlength}
            key={item.key}
            title={item.title}
            year={item.year}
            type={item.type}
            img={item.img}
            description={item.description}
            favourite={item.favourite}
            width={255}
          />
        );
      })}
    </div>
  );
};

export default Favourite;
