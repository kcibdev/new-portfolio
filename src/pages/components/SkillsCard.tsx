import { skillProps } from "../views/Skills";

type Props = {
  skillCard: skillProps;
};

const SkillsCard = (props: Props) => {
  const { skillCard: skill } = props;
  return (
    <div className="border-[0.5px] border-dashed py-8 px-6 flex flex-col items-center justify-center">
      <div className="skill__icon rounded-full w-24 md:w-28 h-24 md:h-28 flex items-center justify-center primary-bg">
        <skill.icon className="text-4xl text-white md:text-5xl" />
      </div>
      <h1 className="skill__title text-2xl md:text-3xl font-bold text-center mt-5">
        {skill.title}
      </h1>
      <p className="skill__subtitle text-lg font-semibold text-gray-400 mt-2">
        {skill.subtitle}
      </p>
      <div className="skill__container mt-4">
        <ul className="flex flex-wrap">
          {skill.languages.map((language) => (
            <li className="skill__cover px-3 py-3 w-max m-3 rounded-lg text-lg font-semibold border-[0.5px]">
              {language.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;
