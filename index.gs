//This is to load the sidebar
function loadSidebar() {
  
  const htmlForSidebar = HtmlService.createTemplateFromFile("sidebar");
  const htmlOutput = htmlForSidebar.evaluate();
  htmlOutput.setTitle("Demo GA");
  const ui = SpreadsheetApp.getUi();
  ui.showSidebar(htmlOutput);
}

//Create the menu on Google Sheet
function createMenu(){
  const ui = SpreadsheetApp.getUi();
  //Name of the menu 
  const menu = ui.createMenu("AliItemExtractor");
  
  menu.addItem("Show UI","loadSidebar");
  menu.addToUi();
}

//To invoke the menu when we launched the Google Sheet
function onOpen() {
  createMenu()
}
