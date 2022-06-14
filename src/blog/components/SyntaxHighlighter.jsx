import React from 'react'
import { Prism } from "react-syntax-highlighter";
import {a11yDark, atomDark, vs, vscDarkPlus} from "react-syntax-highlighter/dist/cjs/styles/prism";

const PRISM_STYLES = {
    a11yDark:a11yDark,
    atomDark: atomDark,
    vs: vs,
    vscDarkPlus:vscDarkPlus
}
export default function SyntaxHighlighter(props) {
  // console.log(props.style);
  // console.log(props);
  return (
    <Prism language={props.language} style={PRISM_STYLES[props.styleName]}>
      {props.children}
    </Prism>
  )
}
