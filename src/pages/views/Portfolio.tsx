import { containerStyle } from "../styles";
import { portfolios } from "../../assets/data/portfolioContent";
import PortfolioCard from "../components/PortfolioCard";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className={`${containerStyle} text-center`} id="portfolio">
      <h1 className="text-3xl font-bold mt-3 mb-1">Some Of My Work</h1>
      <p className="text-lg text-gray-400 mb-3">
        Here are some of the things i have done
      </p>
      <div className="portfolio__list flex flex-wrap gap-3 mt-14 justify-center">
        {portfolios.map((portfolio) => (
          <PortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
