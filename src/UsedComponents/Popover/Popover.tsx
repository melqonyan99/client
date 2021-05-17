import React, { useState, useRef, useEffect } from "react";
import "./popover.scss";
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

const Example = ({ error }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const wrapperRef = useRef(null);
  const iconReport = useRef(null);
  function handleClickOutside(event) {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      !iconReport.current.contains(event.target)
    ) { 
      setPopoverOpen(!popoverOpen);
    }
  }
  useEffect(() => { 
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className="react-popover">
      <span
        onClick={() => setPopoverOpen(!popoverOpen)}
        ref={iconReport}
      ><ReportProblemOutlinedIcon fontSize="small" style={{color:"#fff"}}/></span>
      {popoverOpen && (
        <div className="popover-body" ref={wrapperRef}>
          <div className="desc">
            <p>{error}</p>
          </div>
          <div className="arrow"></div>
        </div>
      )}
    </div>
  );
};

export default Example;
