import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllData } from "../../api/advertsApi";
import { List } from "./CarList.styled";
import { CarListForm } from "../CarListForm/CarListForm";
import { CarItem } from "../CarItem/CarItem";
import { Modal } from "../Modal/Modal";
import { LoadMore } from "../LoadMore/LoadMore";
import { limit } from "../../constans/constans";

export const CarList = () => {
  const [page, setPage] = useState(1);
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
    async function fetchData() {
      try {
        const carsData = await getAllData(page, limit);
        setCars((prevState) => [...prevState, ...carsData]);

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
  }, [page]);

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

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <CarListForm brands={brands} prices={prices} onFilter={handleFilter} />

      <List>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} openModal={() => openModal(car)} />
        ))}
      </List>

      <LoadMore onClick={handleClick} />

      {showModal && <Modal onClose={closeModal} selectedCar={selectedCar} />}
    </>
  );
};

CarList.propTypes = {
  cars: PropTypes.array,
};
