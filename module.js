Entry.block.text.func = function(t,e){
	return e.getField("NAME",e).replace(/\{\{.*?\}\}/g, name=>Entry.variableContainer.getVariableByName(name.substring(2, name.length-2)).getValue());
};
Entry.block.number.func = function(t,e){
	return e.getField("NUM",e).replace(/\{\{.*?\}\}/g, name=>Entry.variableContainer.getVariableByName(name.substring(2, name.length-2)).getValue());
};