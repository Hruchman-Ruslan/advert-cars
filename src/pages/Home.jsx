import { getAllData } from "../api/advertsApi";

export default function Home() {
  async function fetchData() {
    try {
      const cars = await getAllData();
      console.log(cars);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();

  return (
    <section>
      <h1>Home Page</h1>
    </section>
  );
}
