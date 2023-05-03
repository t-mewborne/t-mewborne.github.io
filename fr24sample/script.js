
// function onFilterSelect(dropdown){
//     var selections=["filterSNInput","filterRegistrationInput","filterAirlineDropdown"]
//     for (i=0;i<selections.length;i++) {
//         document.getElementById(selections[i]).hidden=true;
//     }
   
//     var option_value = dropdown.options[dropdown.selectedIndex].value;
//     if (option_value=="Serial Number"){
//         document.getElementById("filterSNInput").hidden=false;
//     }
//     else if (option_value=="Registration"){
//         document.getElementById("filterRegistrationInput").hidden=false;
//     }
//     else if (option_value=="Airline"){
//         document.getElementById("filterAirlineDropdown").hidden=false;
//     }
//     else {
//         alert("Feature not yet implemented")
//     }
// }

// function filterSN() {
//     // Declare variables
//     var input, filter, table, tr, i;
//     input = document.getElementById("filterSNInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("aircraftTable");
//     tr = table.getElementsByTagName("tr");
  
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//       var tdAL = tr[i].getElementsByTagName("td")[2];
//       var tdSN = tr[i].getElementsByTagName("td")[3];
//       var tdRN = tr[i].getElementsByTagName("td")[4];
//       var tdAR = tr[i].getElementsByTagName("td")[5];
//       var tdAG = tr[i].getElementsByTagName("td")[6];
//       var tdLS = tr[i].getElementsByTagName("td")[7];
//       var tdHC = tr[i].getElementsByTagName("td")[8];
//       if (tdSN) {
//         var txtValueAL = tdAL.textContent || tdAL.innerText;
//         var txtValueSN = tdSN.textContent || tdSN.innerText;
//         var txtValueRN = tdRN.textContent || tdRN.innerText;
//         var txtValueAR = tdAR.textContent || tdAR.innerText;
//         var txtValueAG = tdAG.textContent || tdAG.innerText;
//         var txtValueLS = tdLS.textContent || tdLS.innerText;
//         var txtValueHC = tdHC.textContent || tdHC.innerText;
//         //if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         if (myCompare(txtValueAL,filter)||
//             myCompare(txtValueSN,filter)||
//             myCompare(txtValueRN,filter)||
//             myCompare(txtValueAR,filter)||
//             myCompare(txtValueAG,filter)||
//             myCompare(txtValueLS,filter)||
//             myCompare(txtValueHC,filter)){
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }

function filterTable(){
  var filterResult=document.getElementById("filterSNInput").value.toUpperCase();
  var table = document.getElementById("aircraftTable");
  var trs = table.getElementsByTagName("tr");
  for (var i = 0; i < trs.length; i++){
    const tds = trs[i].getElementsByTagName("td");
    for (var j=0; j<tds.length; j++){
      if (tds[j]){
        var textValue=tds[j].textContent || tds[j].innerText;
        textValue=textValue.toUpperCase();
        if (textValue.indexOf(filterResult)>-1){
          trs[i].style.display="";
          break;
        } else {
          trs[i].style.display="none";
        }
      }
    }
  }
}


//   function filterRN() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("filterRegistrationInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("aircraftTable");
//     tr = table.getElementsByTagName("tr");
  
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[4];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }


  // function filterTable(){
  //   tr = table.getElementsByTagName("tr");
  //   for (i=0;i<tr.length;i++){
  //     tr[i].style.display="";
  //   }


  //   filterCell("filterSNInput",3)
  //   //filterCell("filterRegistrationInput",4)
  // }

  // function filterTable() {
  //   // Declare variables
  //   //var inputSN, filterSN, table, tr, td, tds, i, txtValue;
  //   var inputSN = document.getElementById("filterSNInput");
  //   var filterSN=inputSN.value.toUpperCase();
  //   var inputRG = document.getElementById("filterRegistrationInput").value.toUpperCase();
    
  //   var table = document.getElementById("aircraftTable");
  //   var tr = table.getElementsByTagName("tr");
  //   var tds=tr.getElementsByTagName('td');
  
  //   // Loop through all table rows, and hide those who don't match the search query
  //   for (i = 0; i < tr.length; i++) {
  //     //td = tr[i].getElementsByTagName("td")[column];
  //     var snColumn=tds[3].textContent.toUpperCase();
  //     var rgColumn=tds[4].textContent.toUpperCase();
  //     if (snColumn.indexOf(filterSN) > -1 || rgColumn.indexOf(inputRG)>-1){
  //       tr[i].style.display="";
  //     } else {
  //       tr[i].style.display="none";
  //     }
  //     //if (td) {
  //       // txtValue = td.textContent || td.innerText;
  //       // if (txtValue.toUpperCase().indexOf(filter) <= -1) {
  //       //   tr[i].style.display = "none";
  //       // }
  //     //}
  //   }
  // }

//   function filterTable(event) {
//     alert("hi")
//     var filter = event.target.value.toUpperCase();
//     var rows = document.querySelector("#aircraftTable tbody").rows;
    
//     for (var i = 0; i < rows.length; i++) {
//         var firstCol = rows[i].cells[2].textContent.toUpperCase();
//         var secondCol = rows[i].cells[3].textContent.toUpperCase();
//         if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
//             rows[i].style.display = "";
//         } else {
//             rows[i].style.display = "none";
//         }      
//     }
// }

// document.querySelector('#searchInput').addEventListener('keyup', filterTable, false);