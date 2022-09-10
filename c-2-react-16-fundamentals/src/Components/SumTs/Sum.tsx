import React from "react";

interface SumProps {
   a: number,
   b: number
}

/**
 * Using interface we can validate properties at compile time.
 * @param props 
 * @returns 
 */
export const Sum = (props: SumProps) => {
   return <div>{props.a} + {props.b} = {props.a + props.b}</div>
}
