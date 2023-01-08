import React from 'react'

export default function ErrorComponent() {


 const error = ()=>{
    throw new Error();
 }


  return (
    <div>
      {error()}
    </div>
  )
}
