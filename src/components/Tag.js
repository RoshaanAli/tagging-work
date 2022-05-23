import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";

const Tag = ({ pixels, onClickTag = () => {}, id }) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  });
  return (
    <>
      <div
        onClick={onClickTag}
        data-tip={id}
        data-for={id}
        className="tag-div-main badge badge-pill badge-info"
        style={{ top: pixels.y, left: pixels.x }}
      >
        {pixels.name}
      </div>
      <ReactTooltip id={id} place="right" type="info" effect="solid">
        {pixels.descp}
      </ReactTooltip>
    </>
  );
};

export default Tag;
