import React from 'react';
import Users from './Users';

const users = Users;

//Exercise Loop through an array of objects (from Users)

const Avatar = () => {
      return(
          <div>
              {users.map(user => (
                  <div>
                      <img src={user.image}></img>
                        <h4>{user.firstName}</h4>
                        <h4>{user.lastName}</h4>
                  </div>
              ))}
          </div>
      )
}



  
//Exercise Workshop (Bart, Homer)

// const Avatar = ({image, firstName, lastName}) => {
//     return(
//         <div>
            // <div>
            //     <img src={image}></img>
            //     <h4>{firstName}</h4>
            //     <h4>{lastName}</h4>
            // </div>
//         </div>
//     );
// }


export default Avatar;