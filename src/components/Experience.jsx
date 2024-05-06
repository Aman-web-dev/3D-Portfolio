import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import Styles from "../Styles";

import { experiences } from "../constants/index";
import SectionWrapper from "../assets/hof";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div
        className="flex justify-center w-full h-full items-center "
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white hover:text-secondary text-[24px] font-bold">
        {experience.title}
      </h3>
      <p
        className="text-secondary hover:text-white text-[18px]  font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
      <h4 className="text-white text-[14px]">{experience.date}</h4>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2 ">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={Styles.sectionSubText}>What i have Done So Far </p>
        <h2 className={Styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
