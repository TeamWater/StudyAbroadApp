
//Ussarian
function OpenBeforeLeavingChecklist() {
	var BeforeLeavingChecklist = Alloy.createController("BeforeLeavingChecklist").getView();
	BeforeLeavingChecklist.open();
}

function OpenInCountryChecklist() {
	var InCountryChecklist = Alloy.createController("InCountryChecklist").getView();
	InCountryChecklist.open();
}

function OpenBeforeHeadingHomeChecklist() {
	var BeforeHeadingHomeChecklist = Alloy.createController("BeforeHeadingHomeChecklist").getView();
	BeforeHeadingHomeChecklist.open();
}