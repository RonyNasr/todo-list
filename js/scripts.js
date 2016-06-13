// Back end Logic
function Task(description,status){
  this.description=description;
  this.status = status;
}

Task.prototype.complete = function(){
  return "<del>" + this.description + "</del>"
}

var emptyFields = function(){
  $("#new-task").val("");
}

var displayTask = function(task){
  if (task.status !== "active") {
    return "<del>" + task.description + ">/del>";
  }else {
    return task.description;
  }
}

var deactivate = function(task) {
  task.status = "inactive";
}

var taskList = [];

// Front end Logic
$(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var newTask = new Task($("#new-task").val(),"active");
    taskList.push (newTask);

    console.log(taskList);
      $("#list").empty();
    taskList.forEach(function(task){
      console.log(task);
      $("#list").append("<li>" + displayTask(task) + "  <span class='btn btn-success done'id='" + task.description + "'> Done! </span></li>");

      $(".done").click(function(){
        console.log(this.id);
        deactivate(taskList[taskList.find(this.id)]);

      })

    });
    emptyFields();
  });
});
