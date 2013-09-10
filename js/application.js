$(document).ready(startApp);

function startApp() {

    // initialize the app
    var itemCount = 0;
    var itemInput = $("#itemInput");
    itemInput.val("");

    // define what item is submitted either by click or by enter
    $("#addItem").click(toDoList);
    $("#itemInput").keydown(function (enter) {
        if (enter.keyCode == 13) {
            toDoList()
        }
    });
    // To Do List Function That Runs on Key Down or Click
    function toDoList() {
        if (itemInput.val() === '') {
            return;
        }
        // define incomplete and complete lists and item to add
        var incompleteItems = $(".incomplete-items");
        var completeItems = $(".complete-items");
        var itemToAdd = itemInput.val();
        console.log(itemToAdd)
        itemInput.val("");

        // create a list item and checkbox, assigning an id to it.
        var liItem = $("<li><input type='checkbox' name=" + itemToAdd + " value=" + itemToAdd +">"+ "         "+ itemToAdd + "<a class='delete' href='#'> <img src='img/trash.png' title='trash'></a></li>");
        liItem.attr("id", "item[" + itemCount+++"]");
        incomplete(liItem);

        //delete items from the lists
        liItem.find("a").click(function () {
            $(this).parent().hide('slow', function () {
                $(this).remove();
            });
        });
        // add the item to the incomplete list
        function incomplete(liItem) {
            liItem.hide();
            incompleteItems.append(liItem);
            liItem.fadeIn('slow');
        }
        // move the corresponding list item to 'complete' when checkbox is clicked.
        function complete(liItem) {
            liItem.hide();
            completeItems.append(liItem);
            liItem.fadeIn('slow');
        }
        //toggle
        liItem.find("input:checkbox").click(function () {
            this.checked ? complete(liItem) : incomplete(liItem);
        });

    }
}

