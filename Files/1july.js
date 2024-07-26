
let enroll={
//   "2100180170":"",
// "2100180171": "",
2100180170:{
  Seatno:365935,
  Name:'Dnyaneshwari Khatiwada',
  Sen:58,
  DMA:59,
  JDK:54,
  CNE:60,
  GUI:43
},
2100180174:{
  Name:'Rakhi Mahajan',
  Sen:62,
  DMA:54,
  JDK:58,
  CNE:60,
  GUI:43
}
}



    let userenroll=0;
    function generateOTP() {
      let enrollmentNumber = document.getElementById('enteredenrollmentNumber').value;
      userenroll=enrollmentNumber;
      if (!isNaN(enrollmentNumber) && enrollmentNumber in enroll) {
          let otp=genotp();
          
          document.getElementById('h1').innerHTML=otp;

          
          
        }
        else{
          window.alert('Incorrect Enroll no')
        }
      }
        function genotp(){
          for(let i=0;i<6;i++){
               otp=Math.random().toString(36).substr(2, 5)
                return otp;
        }
      }
      function verifyResult() {
            let enteredOTP = document.getElementById('enteredotp').value;
            
            
            
            if (otp && enteredOTP===otp.toString() ){
              window.alert('OTP verify')
             showresult()
            }
            else if(enteredOTP.length>=6 ){
              window.alert('Please enter correct  6 digit OTP')
            }
            
        
            else {
              
              window.alert('not verify')
            }
          }
          function showresult(){
           
         
      
           if(userenroll && userenroll in enroll){
            console.log(enroll[userenroll])
          
            document.write(
           
              `<div style="display: grid;
 align-items: center; 
 grid-template-columns: 0fr 0fr 1fr;
 column-gap: 5px;font-size:25px">
 <img src="msbte.jpg" style="width:200; height:200;margin-left: 30px;margin-top:10px;alt""><br>
 <center><h1>Maharashtra State Board of Technical Education</center></h1><br>

 
              </div>
              <center><h2>STATEMENTS OF MARKS</h2></center><br>
                
              <table border="1" style="border":5px solid black ;"border-collapse":collapse;"width:100%">
             
            
             <h3>MR/MS. ${enroll[userenroll].Name}</h3><hr>
             <h3>Enrollment No :${userenroll}</h3><hr>
                <h3>EXAMINATION: SUMMER 2023</h3><hr>
                 
                 <h3>Seat no :${enroll[userenroll].Seatno}</h3><hr>
                <h3>COURSE: Diploma in Information Technology</h3><hr><br>
               

            
            
               <tr>
                <th style="width:20%">TITTLE OF COURSES</th>
                <th style="width:20%">TH/PR</th>
                <th style="width:20%">COURSES HEAD</th>
                <th style="width:20%">MARKS[obt]</th>
                <th style="width:20%">Total Marks[100]</th>
                <th style="width:20%">CREDITS</th>
               
                  </tr>

                <tr style="height:50px">
                <td>JDK</td>
                <td>70</td>
                <td>ESE</td>
               <td>${enroll[userenroll].JDK}</td>
               <td>82</td>
               <td>7</td>
              
              
                
                </tr>

               <tr style="height:50px">
                <td>Sen</td>
                <td>70</td>
                <td>ESE</td>
               <td>${enroll[userenroll].Sen}</td>
               <td>89</td>
               <td>5</td>
               </tr>
               <tr style="height:50px">>
               <td>DMA</td>
               <td>70</td>
               <td>ESE</td>
               <td>${enroll[userenroll].DMA}</td>
               <td>87</td>
               <td>7</td>

<tr>
               <tr style="height:50px">
                
                <td>CNE</td>
                <td>70</td>
                <td>ESE</td>
                <td>${enroll[userenroll].CNE}</td>
                <td>88</td>
               <td>5</td>
</tr>
                
<tr style="height:50px"> 
<td>GUI</td>
<td>70</td>
<td>ESE</td>
<td>${enroll[userenroll].GUI}</td>
<td>88</td>
<td>6</td>
</tr>
                

             
             
               
           
                
            </table>`
             )
 }
        }