/*
  - This file can be useful in changing JSON data with random data...
  - We can manipulate the data of any JSON element by using element's dot-address.
     - location.of.the.element = "someNewValue"; ( modify )
     - delete location.of.the.element; ( delete )
  - Can be used to create your own data set .
*/

//In this example we will change some data-elements for each user.

    generateRandomString(length) {
      //this method will generate random string of a particular length.
      let result           = '';
      const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
   
  
    changeData = () => {
      let originalData = {status :"OK" , noOfItems:"122", requestId :"11hn4ffe" , data:[]};      

      let updatedData =[];

      originalData.data.map((user) => {
          let updatedUser = user ;

          let fName = generateRandomString(5);
          let lName = generateRandomString(5);
          const emailId = `${fName}.${lName}@rclovity.com`;

          updatedUser.firstName = fName;
          updatedUser.lastName = lName;
          updatedUser.name = `${fName} ${lName}`;
          updatedUser.email = emailId;

          updatedData.push(updatedUser);
      });

      console.log(JSON.stringify(updatedData));

    };
