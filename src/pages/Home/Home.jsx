import * as React from "react";
import FAQ from "../FAQ/FAQ";
import Hero from "../../components/HeroSection/HeroSection";
import { Icons } from "../../components/Icons/Icons";
import CarCard from "../../components/CarCard/CarCard";
import { api, endpoints } from "../../lib/api/";


const Home = () => {
  const [cars, setCars] = React.useState();
  const getCars = async () => {
    const result = await api.call(endpoints.getCars);
    if (result.success) {
      setCars(result.data);
    }
  };
  React.useEffect(() => {
    getCars();
  }, []);
  return (
    <div className="home">
      <Hero />
      <div className="featured container">
        <p className="featured-title">As featured in</p>
        <ul className="featured-icons">
          <li>
            <Icons.Forbes />
          </li>
          <li>
            <Icons.TechCrunch />{" "}
          </li>
          <li>
            <Icons.Wired />
          </li>
          <li>
            <Icons.CNN />{" "}
          </li>
          <li>
            {" "}
            <Icons.BBC />
          </li>
          <li>
            {" "}
            <Icons.CBS />
          </li>
          <li>
            <Icons.FastCompany />
          </li>
          <li>
            <Icons.Huffpost />
          </li>
        </ul>
      </div>
      <div className="quote">
        <div className="quote-img"></div>
        <div className="quote-paragraph">
          <p className="quote-paragraph-first">
            "It's the way you ride the trail that counts"
          </p>
          <p className="quote-paragraph-second">- Dale Evans</p>
        </div>
      </div>
      <section className="features container">
        <div className="features-paragraphs">
          <p className="features-paragraphs-title">Features</p>
          <p className="features-paragraphs-first">
            Book your car rental today and experience the ultimate in
            convenience and comfort.
          </p>
        </div>
        <div className="features-cards">
          <div className="features-cards-card">
            <Icons.Shield className="icons" />
            <h3>Security, from start to finish</h3>
            <p>
              Our fleet is regularly updated with the latest models from top
              manufacturers, ensuring that you're driving a safe and reliable
              vehicle.
            </p>
          </div>
          <div className="features-cards-card">
            <Icons.Leaf className="icons" />
            <h3>
              We are supporting initiatives that promote energy efficiency
            </h3>
            <p>
              We are committed to reducing our carbon footprint through
              investment in clean technologies and contributing to environmental
              projects.
            </p>
          </div>
          <div className="features-cards-card">
            <Icons.Medal className="icons" />
            <h3>Awarded for America's Best Customer Service 2022</h3>
            <p>
              We are committed to providing you with a unique and satisfactory
              rental experience. We offer a wide variety of rental options and a
              large selection of vehicles, as well as competitive rates.
            </p>
          </div>
          <div className="features-cards-card">
            <Icons.Globe className="icons" />
            <h3>20,000 Pickup Locations Worldwide</h3>
            <p>
              With our easy-to-use online booking system, you can reserve your
              car in minutes and have it delivered to your doorstep or at the
              airport.
            </p>
          </div>
          <div className="features-cards-card">
            <Icons.Phone className="icons" />
            <h3>iOS App</h3>
            <p>
              Compare prices, make vehicle reservations and more wherever you
              are.
            </p>
          </div>
          <div className="features-cards-card">
            <Icons.RoundedCorners className="icons" />
            <h3>24/7 Road Assistence</h3>
            <p>
              Our friendly customer service team is always available to assist
              you with any questions or concerns.
            </p>
          </div>
        </div>
      </section>
      <div className="rewards">
        <p className="rewards-title">Start earning rewards today</p>
        <p className="rewards-first">
          Join our exclusive car rental rewards program! Registering is quick
          and easy, just download our app and create an account. As a member,
          you'll enjoy exclusive benefits and perks every time you rent a car
          with us.
        </p>
        <Icons.AppStore className="icons" />
      </div>
      <div className="hotDeals">
        <h3 className="hotDeals-title">Hot deals right now</h3>
        <div className="hotDeals-cars container">
        {cars?.slice(0, 4).map((car) => {
          return <CarCard car={car} key={car._id}/>;
        })}
        </div>
      </div>
      <FAQ />
    </div>
  );
};
export default Home;
