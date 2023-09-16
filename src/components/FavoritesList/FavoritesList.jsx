import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CarListForm } from "../CarListForm/CarListForm";
import { CarItem } from "../CarItem/CarItem";
import { List } from "../CarList/CarList.styled";
import { Modal } from "../Modal/Modal";

export const FavoritesList = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      try {
        const carsData = JSON.parse(localStorage.getItem("Cars")) || [];
        setCars((prevState) => [...prevState, ...carsData]);

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

    setCars(filtered);
  };

  return (
    <>
      <CarListForm brands={brands} prices={prices} onFilter={handleFilter} />

      <List>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} openModal={() => openModal(car)} />
        ))}
      </List>

      {showModal && <Modal onClose={closeModal} selectedCar={selectedCar} />}
    </>
  );
};

FavoritesList.propTypes = {
  cars: PropTypes.array,
};
