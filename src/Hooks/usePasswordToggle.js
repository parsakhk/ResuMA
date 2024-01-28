import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false)

    const Icon = (
        <FontAwesomeIcon icon={ visible ? "eye-slash": "eye"} />
    )

    const InputType = visible ? "text" : "password"

    return [InputType, Icon]
}

export default usePasswordToggle