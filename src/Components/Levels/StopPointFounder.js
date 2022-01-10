import { useEffect, useState } from "react";
const StopPointFounder = (props) => {
  const [loading, setLoading] = useState(false);
  let newDeg = [];

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        setLoading(true);
      }
    }, 4500);
    return () => (mounted = false);
  }, [props.initialDegree]);

  console.log();
  props.prizeList.map((element) => {
    if (element.initialDegree + props.degree <= 360) {
      return newDeg.push(element.initialDegree + props.degree);
    } else {
      return newDeg.push(element.initialDegree + props.degree - 360);
    }
  });

  if (loading) {
    newDeg.map((element, index) => {
      if (
        element >= props.acceptPoint.start ||
        element < props.acceptPoint.end
      ) {
        return props.winPointHandler(
          props.prizeList[index].id,
          props.prizeList[index].value,
          props.prizeList[index].name,
          props.prizeList.length
        );
      }
    });
  }
  return <></>;
};
export default StopPointFounder;
