/** Do the scatter plot
 * Method cited at:
 * https://groups.google.com/forum/#!msg/paperjs/C6F0XFlplqM/_67AMqCR_nAJ
 */

window.globals = {
  disciplineList: [],
  obstructionList: [],   
  HORIZONTAL_SIZE: 500,
  VERTICAL_SIZE: 500,
  initScatterPanel: function(){          
    view.viewSize = new Size(globals.HORIZONTAL_SIZE, globals.VERTICAL_SIZE);

    if(globals.disciplineList.length !== globals.obstructionList.length){
      alert("Error on size of the attributes!");
    }    

    for(var i = 0; i < globals.disciplineList.length; i++){
      x = globals.disciplineList[i];
      y = globals.obstructionList[i];

      new Path.Circle({
        center: [globals.HORIZONTAL_SIZE - (x * 500), 
                 globals.VERTICAL_SIZE - (y * 800)],
        radius: 3,
        fillColor: 'blue',
        opacity: 0.5
      });
    }    
    
/*    new Path.Circle({
        center: [10, 10],
        radius: 10,
        fillColor: 'black',
        opacity: 0.8
    });*/

    view.update();  
  }
};

window.addEventListener('ProcessedScatterData', globals.initScatterPanel, false);
