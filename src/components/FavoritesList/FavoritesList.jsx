import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CarListForm } from "../CarListForm/CarListForm";
import { CarItem } from "../CarItem/CarItem";
import { List } from "../CarList/CarList.styled";

export const FavoritesList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      try {
        const carsData = JSON.parse(localStorage.getItem("selectedCars")) || [];
        console.log(carsData);
        setCars(carsData);
        setFilteredCars(carsData);

        const uniqueBrands = [...new Set(carsData.map((car) => car.make))];
        setBrands(uniqueBrands);

        const uniquePrices = [
          ...new Set(carsData.map((car) => car.rentalPrice)),
        ];
        setPrices(uniquePrices);
      } catch (error) {
        console.error("Error fetching data from local storage:", error);
      }
    };

    fetchDataFromLocalStorage();
  }, []);

  const handleFilter = (values) => {
    let filtered = [...cars];

    if (values.brand) {
      filtered = filtered.filter((car) => car.make === values.brand);
    }

    if (values.rentalPrice) {
      filtered = filtered.filter(
        (car) => car.rentalPrice === values.rentalPrice
      );
    }

    if (values.minMileage) {
      filtered = filtered.filter((car) => car.mileage >= values.minMileage);
    }

    if (values.maxMileage) {
      filtered = filtered.filter((car) => car.mileage <= values.maxMileage);
    }

    setFilteredCars(filtered);
  };

  return (
    <div>
      <CarListForm brands={brands} prices={prices} onFilter={handleFilter} />
      <List>
        {filteredCars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </List>
    </div>
  );
};

FavoritesList.propTypes = {
  cars: PropTypes.array,
};
