/* 
   Can't use an iterator as when we modify any of its nodes, the iterator becomes invalid.
   So we get a SNAPSHOT.  This returns an object that has a snapshotLength field and we can access
   the nodes with the snapshotItem().
*/


window.onload = function hideLines()
{
    var z = document.evaluate("//*[name() = 'g' and namespace-uri() = 'http://www.w3.org/2000/svg' and @class = 'lines']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE);
    console.log(z)
    var g;
    var ctr = 0;
	
    while(ctr <= z.snapshotLength) {
    
		g = z.snapshotItem(ctr++);
		
		//console.log("G>>>>>>>>", g)
		//console.log('hiding ' + g + " " + g.getAttribute("display")) ;
		
		
		g.setAttribute("visiblility", "hidden");
		if (g.getAttribute("display") == "none"){
		  g.setAttribute("display", "inline");
		}
		else{
		  g.setAttribute("display", "none");	
		}
      
    }
}
	





  
  

