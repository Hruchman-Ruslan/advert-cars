import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllData } from "../../api/advertsApi";
import { List } from "./CarList.styled";
import { CarListForm } from "../CarListForm/CarListForm";
import { CarItem } from "../CarItem/CarItem";

export const CarList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const carsData = await getAllData();
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
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
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

CarList.propTypes = {
  cars: PropTypes.array,
};
