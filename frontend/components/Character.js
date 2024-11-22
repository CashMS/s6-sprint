import React, { useState } from 'react'

function Character({ info, pplName, planName }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const [home, setHome] = useState(false);

  const toggle = () => {
    if (!home) {
      setHome(!home);
    } else if (home) {
      setHome(!home);
    }
  }

  return (
    <div className='character-card' onClick={toggle}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{pplName}</h3>
      {
        home && (
          <p>Planet: {" "}
            <span className='character-planet'>  {planName}</span> 
          </p>
        )
      }
    </div>
  )
}

export default Character
