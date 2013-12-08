/*-------------------------------------------------------------------------------------------------
	global variables
-------------------------------------------------------------------------------------------------*/

var wallsTobePainted_foyer 			= [[],[],[]];
var wallsTobePainted_living_room	= [[],[],[]];
var wallsTobePainted_dining_room 	= [[],[],[]];
var wallsTobePainted_kitchen		= [[],[],[]];
var wallsTobePainted_powder_room	= [[],[],[]];
var wallsTobePainted_bedroom_1		= [[],[],[]];
var wallsTobePainted_bedroom_2		= [[],[],[]];
var wallsTobePainted_bedroom_3		= [[],[],[]];
var wallsTobePainted_bedroom_4		= [[],[],[]];
var wallsTobePainted_bathroom_1		= [[],[],[]];
var wallsTobePainted_bathroom_2		= [[],[],[]];
var wallsTobePainted_bathroom_3		= [[],[],[]];
var wallsTobePainted_bathroom_4		= [[],[],[]];
var wallsTobePainted_hallway_1		= [[],[],[]];
var wallsTobePainted_hallway_2		= [[],[],[]];
var wallsTobePainted_hallway_3		= [[],[],[]];
var wallsTobePainted_library		= [[],[],[]];
var wallsTobePainted_sunroom		= [[],[],[]];
var wallsTobePainted_family_room	= [[],[],[]];
var total_gallons				= [[],[],[]];

/*-------------------------------------------------------------------------------------------------
	accordion function
-------------------------------------------------------------------------------------------------*/

$(function() {
	$( "#accordion" ).accordion({
	  collapsible: true,
	  heightStyle: "content",
	  icons: true
	});
});



/*-------------------------------------------------------------------------------------------------
	dataTables function
-------------------------------------------------------------------------------------------------*/

$(document).ready(function() {
	$('#total_gallons').dataTable({
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false,
        "aaSorting": [[ 2, "desc" ]]
	});
});

/*-------------------------------------------------------------------------------------------------
	liquidunit selector function
-------------------------------------------------------------------------------------------------*/

$('#liters').click(function(){
	console.log('liters chosen');
	var unit_liquidMeasurement ="l";
});

$('#quarts').click(function(){
	console.log('quarts chosen');
	var unit_liquidMeasurement ="qt";
});



/*-------------------------------------------------------------------------------------------------
	numeric entry check
-------------------------------------------------------------------------------------------------*/

function checkInput(item_gallons,item_name) { 

	if ($.isNumeric(item_gallons)){
		console.log($.isNumeric(item_gallons));
 		document.getElementById(item_name).style.backgroundColor = '#ffffff';
	}
	else{
		item_gallons=0;
		alert("enter a number");
 		document.getElementById(item_name).style.backgroundColor = '#ff0000';
	};
};

/*-------------------------------------------------------------------------------------------------
	get values and add to table
-------------------------------------------------------------------------------------------------*/

function addToTable(item,category) { 

	item_name 		= item.parents('tr').find('td').html(); //get the item name 
	item_gallons 	= item.val(); //get item paint needed for walls

	//if the input cell has a number in it, add a row
	if(item_gallons !== ""){
		$('#total_gallons').dataTable().fnAddData( [
		item_name,
		category,
		item_gallons ] );
	}
};




/*-------------------------------------------------------------------------------------------------
	calculate
-------------------------------------------------------------------------------------------------*/

function calculateGallons() {

	var foyerTotal 			= 0;
	var living_roomTotal	= 0;
	var dining_roomTotal 	= 0;
	var kitchenTotal		= 0;
	var powder_roomTotal	= 0;
	var bedroom_1Total		= 0;
	var bedroom_2Total		= 0;
	var bedroom_3Total		= 0;
	var bedroom_4Total		= 0;
	var bathroom_1Total		= 0;
	var bathroom_2Total		= 0;
	var bathroom_3Total		= 0;
	var bathroom_4Total		= 0;
	var hallway_1Total		= 0;
	var hallway_2Total		= 0;
	var hallway_3Total		= 0;
	var libraryTotal		= 0;
	var sunroomTotal		= 0;
	var family_roomTotal	= 0;


   
    //reset the jquery table to an empty table
    $('#total_gallons').dataTable().fnClearTable();

    $.each($("#foyer > table").children().children().children().children(), function( index, value ) {
		addToTable($(this),"Foyer");
        foyerTotal+=Number(item_gallons); //sum up all inputs 
    });

    $.each($("#living_roomTotal > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Living Room");
        living_roomTotal+=Number($(this).val());
    });

    $.each($("#dining_roomTotal > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Dining Room");
        dining_roomTotal+=Number($(this).val());
    });

    $.each($("#kitchen > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Kitchen");
        kitchenTotal+=Number($(this).val());
    });

    $.each($("#powder_roomTotal > table").children().children().children().children(), function( index, value ) {
        addToTable($(this), "Powder room");
        powder_roomTotal+=Number($(this).val());
    });

    $.each($("#bedroom_1Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Bedroom #1");
        bedroom_1Total+=Number($(this).val());
    });

    $.each($("#bedroom_2Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Bedroom #2");
        bedroom_2Total+=Number($(this).val());
    });

    $.each($("#bedroom_3Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Bedroom #3");
        bedroom_3Total+=Number($(this).val());
    });

    $.each($("#bedroom_4Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this), "Bedroom #4");
        bedroom_4Total+=Number($(this).val());
    });

    $.each($("#bathroom_1Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Bathroom #1");
        bathroom_1Total+=Number($(this).val());
    });

    $.each($("#bathroom_2Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Bathroom #2");
        bathroom_2Total+=Number($(this).val());
    });

    $.each($("#bathroom_3Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Bathroom #3");
        bathroom_3Total+=Number($(this).val());
    });

    $.each($("#bathroom_4Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this), "Bathroom #4");
        bathroom_4Total+=Number($(this).val());
    });

    $.each($("#hallway_1Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Hallway #1");
        hallway_1Total+=Number($(this).val());
    });

    $.each($("#hallway_2Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Hallway #2");
        hallway_2Total+=Number($(this).val());
    });

    $.each($("#hallway_3Total > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Hallway #3");
        hallway_3Total+=Number($(this).val());
    });

    $.each($("#libraryTotal > table").children().children().children().children(), function( index, value ) {
        addToTable($(this), "Library");
        libraryTotal+=Number($(this).val());
    });

    $.each($("#sunroomTotal > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Sunroom");
        sunroomTotal+=Number($(this).val());
    });

	$.each($("#family_roomTotal > table").children().children().children().children(), function( index, value ) {
        addToTable($(this),"Family Room");
        family_roomTotal+=Number($(this).val());
    });


	$('#foyer_Total').html(foyerTotal);
	$('#living_roomTotal').html(living_roomTotal);
	$('#dining_roomTotal').html(dining_roomTotal);
	$('#kitchenTotal').html(kitchenTotal);
	$('#powder_roomTotal').html(powder_roomTotal);
	$('#bedroom_1Total').html(bedroom_1Total);
	$('#bedroom_2Total').html(bedroom_2Total);
	$('#bedroom_3Total').html(bedroom_3Total);
	$('#bedroom_4Total').html(bedroom_4Total);
	$('#bathroom_1Total').html(bathroom_1Total);
	$('#bathroom_2Total').html(bathroom_2Total);
	$('#bathroom_3Total').html(bathroom_3Total);
	$('#bathroom_4Total').html(bathroom_4Total);
	$('#hallway_1Total').html(hallway_1Total);
	$('#hallway_2Total').html(hallway_2Total);
	$('#hallway_3Total').html(hallway_3Total);
	$('#library_Total').html(libraryTotal);
	$('#sunroom_Total').html(sunroomTotal);
	$('#family_roomTotal').html(family_roomTotal);
	


	//call liquid unit switch function

	$('#gallons_total').html(family_roomTotal+sunroomTotal+libraryTotal+hallway_3Total+hallway_2Total+hallway_1Total+bathroom_4Total+bathroom_3Total+bathroom_2Total+bathroom_1Total+bedroom_4Total+bedroom_3Total+bedroom_2Total+bedroom_1Total+powder_roomTotal+kitchenTotal+dining_roomTotal+living_roomTotal+foyerTotal);

	$('#output').html(family_roomTotal+sunroomTotal+libraryTotal+hallway_3Total+hallway_2Total+hallway_1Total+bathroom_4Total+bathroom_3Total+bathroom_2Total+bathroom_1Total+bedroom_4Total+bedroom_3Total+bedroom_2Total+bedroom_1Total+powder_roomTotal+kitchenTotal+dining_roomTotal+living_roomTotal+foyerTotal+"gal");

};


/*-------------------------------------------------------------------------------------------------
	grabber function
-------------------------------------------------------------------------------------------------*/

$(".calculate").change(function() { 
	checkInput($(this).val(),$(this).attr('id'));
    calculateGallons();
});


