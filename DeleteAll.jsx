import React from 'react'

export default function DeleteAll({removeAll}) {


    return (
        <div>
            <button className='deleteAll' onClick={removeAll}>❌</button>
        </div>
      )

}