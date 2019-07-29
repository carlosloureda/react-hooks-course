import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center"
  }
};

export default function Loading(props) {
  const [content, setContent] = useState(props.text);
  const interval = useRef(null);

  useEffect(() => {
    const { speed, text } = props;

    interval.current = window.setInterval(() => {
      content === text + "..."
        ? setContent(text => text)
        : setContent(text => text + ".");
    }, speed);

    return () => window.clearInterval(interval.current);
  }, [content]);

  return <p style={styles.content}>{content}</p>;
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300
};
