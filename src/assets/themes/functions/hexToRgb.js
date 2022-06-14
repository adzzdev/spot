import chroma from "chroma-js";

function hexToRgb(color, delimiter=", ") {
  return chroma(color).rgb().join(delimiter);
}

export default hexToRgb;