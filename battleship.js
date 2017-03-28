var view = {
	
	displayMessage: function(msg){
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	
	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
		
	},
	
	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	},
	
};




var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	ships:	[
				{ locations: ["10", "20", "30"], hits: ["", "", ""] }, 
				{ locations: ["32", "33", "34"], hits: ["", "", ""] }, 
				{ locations: ["63", "64", "65"], hits: ["hit", "", ""] } 
	],
	
	fire: function(guess){
	//method that turns a player's guess into a hit or miss	
	//trial code
	var ship2 = this.ships[1];
	var tempLocation = ship2.locations;
	console.log("location is: " + tempLocation[0]);
	//trial code
	var ship3 = this.ships[2];
	var tempLocation = ship3.hits;
		if(tempLocation[0] == "hit"){
		console.log("WE've BEEN HIT!");
		}
		else
	console.log("nope, not there");
	//trail code
	var ship1 = this.ships[0];
	var hits = ship1.hits;
	hits[2] == "hit";
	//trial code
		for (var i = 0; i < this.numShips; i++){
		
			var ship = this.ships[i];
			//locations = ship.locations;
			//var index = locations.indexOf(guess);
			var index = ship.locations.indexOf(guess);
			
			if (index >= 0){
				//We have a hit!
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");
				if (this.isSunk(ship)){
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		return false;		
	},
	
	isSunk: function(ship){
		for (var i = 0; i < this.shipLength; i++){
			if (ship.hits[i] !== "hit"){
				return false;
			}
		}
		return true;
	}
};		  


model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");



















