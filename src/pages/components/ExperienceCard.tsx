import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

type Props = {
  experience: {
    id: number;
    title: string;
    company: string;
    location: string;
    date: string;
    tasks: string[];
  };
};

const ExperienceCard = (props: Props) => {
  const { experience: exp } = props;
  return (
    <div className="exp__card-content flex flex-col md:flex-row px-3 py-5 border-b-[0.5px] border-dashed">
      <div className="exp__content-left order-last md:order-none text-left mt-5 md:mt-0">
        <p className="exp__date text-base flex items-center">
          <AiOutlineCalendar className="text-lg text-white mr-3" /> {exp.date}
        </p>
        <p className="exp__location text-base flex items-center mt-1">
          <GoLocation className="text-lg text-white mr-3" /> {exp.location}
        </p>
      </div>
      <div className="exp__content-right text-left">
        <p className="exp__title font-bold text-lg">
          {exp.title}
          {", "}
          <span className="exp__company italic font-medium">
            @{exp.company}
          </span>
        </p>
        <ul className="exp__job-task">
          {exp.tasks.map((task, i) => (
            <li className="mt-2 ml-4" key={i}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
