$(function () {
    $(".add-btn").click(function () {
        let taskName = $(".task-name").val();
        if (taskName !== "") {
            let task = $("<div class='task'></div>");
            let check = $("<input type='checkbox' class='check-box'>");
            let nameContainer = $("<div class='name-and-check'></div>");
            let paragraph = $("<p class='par'></p>");
            let name = $(paragraph).text(taskName);
            let type = $("select").val();
            let taskType = $("<div class='type-of-task'><sup>" + type + "</sup></div>");
            let rmv = $("<div class='remove'><button class='rem'><i class='fa fa-trash'></i></button></div>");

            $(nameContainer).append(check);
            $(nameContainer).append(name);
            $(task).append(nameContainer);
            $(task).append(taskType);
            $(task).append(rmv);
            $(task).append("<hr>");
            $(".tasks").append(task);
            $(task).slideToggle(350);
            // Check Finished Tasks
            $(".check-box").each(function () {
                $(".check-box").click(function () {
                    $(this).attr("disabled", "");
                    $(this).next().css("text-decoration", "line-through");
                    $(this).next().css("color", "#777");
                });
            });
            // Remove Button
            $(".rem").click(function () {
                $(this).closest(".task").fadeOut(400);
            });
        }
        $(".task-name").val("");
    });
});