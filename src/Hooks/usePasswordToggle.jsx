import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false)

    const Icon = (
        <FontAwesomeIcon icon={ visible ? faEyeSlash : faEye} 
            onClick={() => setVisible(visiblity => !visiblity)}/>
    )

    const InputType = visible ? "text" : "password"

    return [InputType, Icon]
}

export default usePasswordToggle