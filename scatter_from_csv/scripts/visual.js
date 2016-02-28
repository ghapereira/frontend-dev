/** Do the scatter plot
 * Method cited at:
 * https://groups.google.com/forum/#!msg/paperjs/C6F0XFlplqM/_67AMqCR_nAJ
 */

window.globals = {
  disciplineList: [],
  obstructionList: [],    
  initScatterPanel: function(){          
    view.viewSize = new Size(300, 250);

    if(globals.disciplineList.length !== globals.obstructionList.length){
      alert("Error on size of the attributes!");
    }    

    for(var i = 0; i < globals.disciplineList.length; i++){
      x = globals.disciplineList[i];
      y = globals.obstructionList[i];

      new Path.Circle({
        center: [x * 300, y * 1000],
        radius: 3,
        fillColor: 'blue',
        opacity: 0.5
      });
    }    

    new Path.Circle({
      center: [150, 125],
      radius: 10,
      fillColor: 'red',
      opacity: 0.5
    });

    new Path.Circle({
      center: [0, 0],
      radius: 10,
      fillColor: 'red',
      opacity: 0.5
    });

    new Path.Circle({
      center: [300, 250],
      radius: 10,
      fillColor: 'red',
      opacity: 0.5
    });

    view.update();  
  }
};

window.addEventListener('ProcessedScatterData', globals.initScatterPanel, false);
