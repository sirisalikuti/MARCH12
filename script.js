const works = {
    "task1": {
        "title": "Project 1",
        "url": "task_json_iframe 2/works/task1",
        "event": function() {
            document.getElementById('content').style.backgroundColor = 'Red';
            document.getElementById('content').innerHTML = "<h2>Task 1</h2>";
        }
    },
    "task2": {
        "title": "Project 2",
        "url": "task_json_iframe 2/works/task2",
        "event": function() {
            document.getElementById('content').style.backgroundColor = 'Green';
            document.getElementById('content').innerHTML = "<h2>Task 2</h2>";
        }
    },
    "task3": {
        "title": "Project 3",
        "url": "task_json_iframe 2/works/task3",
        "event": function() {
            document.getElementById('content').style.backgroundColor = 'Blue';
            document.getElementById('content').innerHTML = "<h2>Task 3</h2>";
        }
    }
};

document.getElementById('project1').addEventListener('click', works.task1.event);
document.getElementById('project2').addEventListener('click', works.task2.event);
document.getElementById('project3').addEventListener('click', works.task3.event);
