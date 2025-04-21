import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <div>
            <img className='my-3' src={loading} alt="Loading" style={{ width: "40px", height: "40px", margin: "auto", display: "block" }} />
        </div>
    )
}

export default Spinner
