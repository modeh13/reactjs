import React from "react";
import PropTypes from "prop-types";

/**
 * PropTypes is a runtime validation. It does not prevent errors at Compile time.
 * @param props 
 * @returns 
 */
const Sum = (props: any) => {
   return <div>{props.a} + {props.b} = {props.a + props.a}</div>;
}

Sum.propTypes = {
   a: PropTypes.number.isRequired,
   b: PropTypes.number.isRequired
};

export default Sum;
