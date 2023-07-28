import "./TextandImg.css";

const TextandImg = ({ title, paragraph, reverse, image }) => {
  return (
    <div
      className={
        reverse
          ? "rm_ParentContainer_section reverse"
          : "rm_ParentContainer_section"
      }
    >
      <div className="rm_ParentContainer_section_text">
        <h1 className="rm_ParentContainer_section_text_h1">{title}</h1>
        <p className="rm_ParentContainer_section_text_p">{paragraph}</p>
      </div>
      <div className="rm_ParentContainer_section_contimg">
        <div class="rm_ParentContainer_section_element">
          <img src={image} alt="" className="rm_ParentContainer_section_img" />
        </div>
      </div>
    </div>
  );
};

export default TextandImg;
