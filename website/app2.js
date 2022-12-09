// /* Function to POST data */
// const postData = async ( url = '', data = {})=>{
//   console.log(data)
//     const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data), // body data type must match "Content-Type" header        
//   });

//     try {
//       const newData = await response.json();
//       // console.log(newData);
//       return newData
//     }catch(error) {
//     console.log("error", error);
//     // appropriately handle the error
//     }
// }

// // TODO-Call Function

// postData('/website',{animal:'lion'});


//testooooo
// const express = require('express');
// const mysql = require('mysql');
// const app = express()
// const port = 8080;

// const db = mysql.createConnection({
//   host:'10.0.0.143',
//   user:'root',
//   password:'1017971865MmRr',
// })
// db.connect();
// app.get('/home',(req,res)=>{
//   const q ='select * from nas;'
//   db.query(q,(e,s,f)=>{
//     if (e) return res.json({msg : 'er'});
//     //console.log('The solution is: ', results[0].solution);
//     if (s) return res.json(s);
//   })
//   res.json({msg:'ok'});

// })
// app.listen(port,()=>{console.log(143)});


/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
//daa
const postData = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    //console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

postData('/add', { animal: 'lion', number: 10 });