var today = moment().format('dddd MMMM Do, YYYY, h:mm:ss a');
var currentHour = parseInt(moment().format('H'));

//Array that will go to local storage
var savedEvents = ["", "", "", "", "", "", "", "" ];

$('#today').text(today);
render();

//Checks current time and changes background colors
for (var i = 9; i < 18; i++){
    if (i > currentHour){
        $('#hour-'+ i).css("background-color", "#77dd77");
    } else if(i === currentHour){
        $('#hour-'+ i).css("background-color", "#ff6961");
    } else if(i < currentHour){
        $('#hour-'+ i).css("background-color", "#d3d3d3");
    }
}

function render(){
    if (localStorage.getItem('Saved events') === null){

    } else {
        savedEvents = localStorage.getItem('Saved events').split(',');
    }

    for (var i = 0; i < savedEvents.length; i++){
       var textContent = $('#hour-' + (9+i)).find("textarea");
        textContent.val(savedEvents[i]);
    }
}

$('.saveBtn').on('click', function(){
    var targetedText = $(this).siblings()[1].value;
    var whereToGo = parseInt($(this).parent().attr('id')[5] + $(this).parent().attr('id')[6]);
    savedEvents[whereToGo - 9] = targetedText;
    localStorage.setItem('Saved events', savedEvents);
    render();
})

$('clear').on('click', function(){
    var clear = confirm('Are you sure you want to clear your calendar?');
    if (clear === true){
        savedEvents = ["", "", "", "", "", "", "", "", "" ];
        localStorage.setItem("Saved events", savedEvents);
        render();
        }
    })

