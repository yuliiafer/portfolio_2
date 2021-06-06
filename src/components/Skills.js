import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
  return (
    <>
      <h2>My Skills</h2>
      <div className="skills">
        <ProgressBar variant="success" animated now={99} label={"HTML"} />
        <ProgressBar variant="info" animated now={99} label={"CSS"} />
        <ProgressBar variant="warning" animated now={99} label={"SASS"} />
        <ProgressBar variant="danger" animated now={65} label={"JavaScript"} />
        <ProgressBar variant="success" animated now={80} label={"Wordpress"} />
        <ProgressBar variant="info" animated now={89} label={"Bootstrap"} />
        <ProgressBar variant="warning" animated now={70} label={"Strapi API"} />
        <ProgressBar variant="danger" animated now={70} label={"Mongo DB"} />
        <ProgressBar variant="success" animated now={60} label={"Adobe programmer"} />
        <ProgressBar variant="info" animated now={89} label={"Figma"} />
        <ProgressBar variant="warning" animated now={80} label={"React JS"} />
        <ProgressBar variant="danger" animated now={60} label={"Next JS"} />
      </div>
    </>
  );
};

export default Skills;
