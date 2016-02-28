/**
 *  @file     dragndrop.js
 *  @brief    Handles drag and drop functionality and data
 *            read from file in the project
 *  @author   Gustavo Pereira
 *  @date     19/2/2016
 */

const CSV_SEPARATOR = ',';

/*
 * @brief Prepare table header
 * @param headers: A line
 */
function prepareVotesDataThead(headers){
  // Create thead
  var dataThead = document.createElement("thead");
  var headTr = document.createElement("tr");
  dataThead.appendChild(headTr);

  let firstElement = true;
  for(header of headers){
    let colTitle = document.createElement("td");

    // Add the 'firstColumnData' class to the element
    if(firstElement){
      colTitle.classList.add('firstColumnData');
      firstElement = false;
    }

    colTitle.classList.add("headerCell");
    colTitle.innerHTML = header;
    headTr.appendChild(colTitle);
  }

  return dataThead;
}

function prepareVotesDataRow(line){
  let tRow = document.createElement("tr");

  let firstElement = true;
  for(tdData of line){    
    let tdEl = document.createElement("td");
    
    // Add the 'firstColumnData' class to the element
    if(firstElement){
      tdEl.classList.add('firstColumnData');
      firstElement = false;
    }
    tdEl.innerHTML = tdData;
    tRow.appendChild(tdEl);
  }

  return tRow;
}

/*
 * @brief Prepares and append table to the page
 * @param contents: event.target.result, the text of the read file
 */
function prepareTable(contents){
  let votesTable = document.getElementById('votesDataTable');
  let lines = contents.split("\n");

  // Get headers
  let headers = lines[0].split(CSV_SEPARATOR);
  let dataHeader = prepareVotesDataThead(headers);
  // Add headers to data table area
  votesTable.appendChild(dataHeader);

  // Output the rest of the table
  let firstLineRead = false;
  for(line of lines){
    if(! firstLineRead){
      // Ignore first line
      firstLineRead = true;
      continue;  
    }
    line = line.split(CSV_SEPARATOR);
    let dataLine = prepareVotesDataRow(line);
    votesTable.appendChild(dataLine);
  }

  findColumnElements();
}

/* Operates on the table data */

// @brief Based on http://jsfiddle.net/VZVhR/2/
function findColumnElements(){
  var header = document.getElementsByTagName('thead')[0];

  /* TODO: throw exception on inexistent header
  if(header === undefined){
    throw new
  }
  */

  var trs = document.getElementsByTagName('tr');
  var disciplineValues = [];
  var obstructionValues = [];

  // Find index of the columns; as there must be only one
  // <thead> element, it will be treated as the one
  let headerRow = header.firstChild.children;
  for(let i = 0; i < headerRow.length; i++){
    let attributeName = headerRow[i].innerHTML;
    
    if(attributeName == 'Discipline'){
      var disc_id = i;
    }else if(attributeName == 'Obstruction'){
      var obst_id = i;
    }

    // Found the attributes we need
    if((obst_id !== undefined) && (disc_id !== undefined)){
      break;
    }
  }

  // Loop through the items of the table
  for(let i = 0; i < trs.length; i++){
      try{
        disciplineParsed = parseFloat(trs[i].children[disc_id].innerHTML);
        obstructionParsed = parseFloat(trs[i].children[obst_id].innerHTML);
        if(! isNaN(disciplineParsed) && ! isNaN(obstructionParsed)){
          disciplineValues.push(disciplineParsed);  
          obstructionValues.push(obstructionParsed);
        }                
      }
      // Undefined
      catch(e){
        console.log('Undefined at i=', i);
      }      
  }  

  // Alter window.globals
  window.globals.disciplineList = disciplineValues;
  window.globals.obstructionList = obstructionValues;

  // Trigger ewvent for visual.js to start plotting
  var event = new CustomEvent('ProcessedScatterData');
  this.dispatchEvent(event);
}


/* Handle the events */
function handleFileSelect(evt){
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files; // FileList object.

  var f = files[0];
  var fileName = f.name;
  
  var reader = new FileReader();

  reader.onload = function(event) {            
    prepareTable(event.target.result);    

    // Show table
    let tableEl = document.getElementById("votesDataTableContainer");
    let docTitle = document.getElementsByTagName('title');
    docTitle[0].innerHTML = fileName;

    tableEl.style.display = "block";
  };

  reader.onerror = function(event) {
    console.error("File could not be read! Code " + event.target.error.code);
  };

  reader.readAsText(f);
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the listeners
var dropZone = document.getElementById('csvInput');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);
