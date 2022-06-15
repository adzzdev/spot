import React from 'react'
import PropTypes from "prop-types"

const DEFAULT_APPENDED = (
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary</button>
        <button type="button" class="btn btn-secondary btn-lg px-4 gap-3">Seconday</button>
    </div>
)
export default function HeroCentered({iconClass, headerText, content, appendComponent}) {
  return (
    <div class="px-4 py-5 my-5 text-center">
        <h1 className="display-2"><i className={`${iconClass}`}></i></h1>
        <h1 class="display-5 fw-bold">{headerText}</h1>
        <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{content}</p>
        {appendComponent}
        </div>
    </div>
  )
}

HeroCentered.defaultProps = {
    iconClass: "bi bi-emoji-smile",
    headerText: "Centered Hero",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem asperiores eum quod. Delectus, saepe! Eligendi voluptatibus sunt at! Magnam quam iusto ex quisquam delectus impedit? In esse quam reiciendis alias!",
    appendComponent: DEFAULT_APPENDED
}



