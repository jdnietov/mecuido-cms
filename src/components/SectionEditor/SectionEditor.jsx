import React from 'react'
import PropTypes from 'prop-types'

import './SectionEditor.sass'

function SectionEditor(props) {
    const { id, val } = props.section    
    const { description, title } = val

    return (
        <div className="editor">
            <h2 className="subtitle">{id}</h2>

            <input className="input" type="text" value={title}/><br /><br />
            <textarea className="textarea" value={description} /><br />
            <button className="button is-primary">Guardar cambios</button>
        </div>
    )
}

SectionEditor.propTypes = {
    section: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    })
}

export default SectionEditor

