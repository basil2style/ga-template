//add new row below
function addNewRow(rowData) {
  
  const currentDate = new Date();
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  //
  const ws = ss.getSheetByName("Results");
  
  ws.appendRow([rowData.item, rowData.qty, currentDate]);
  return true;
}

//get data from sheet
function getDataFromSheet() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Options");
  Logger.log(ws.getRange(2,1, ws.getLastRow()-1,1).getValues());
  return ws.getRange(2,1, ws.getLastRow()-1,1).getValues(); //to get range values
 

}