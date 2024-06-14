import inquirer from "inquirer";
export let to_do_tasks = [];
let condition = true;
console.log(to_do_tasks);
let ask_to_add_task = await inquirer.prompt([
    {
        name: "ask_to_add",
        type: "confirm",
        message: "Do you want to add anything to your To-Do List?",
        default: "true",
    }
]);
if (ask_to_add_task.ask_to_add == true) {
    while (condition) {
        let addTask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "What would you like to add in your To-Do List?",
                validate(input) {
                    if (input.trim() === "") {
                        console.log("Please Enter something.");
                        return false;
                    }
                    else {
                        return true;
                    }
                },
            },
            {
                name: "add_todo",
                type: "confirm",
                message: "Would you like to add more tasks to your To-Do List?",
                default: false
            }
        ]);
        to_do_tasks.push(addTask.todo); // adding tasks
        condition = addTask.add_todo; // updating variable condition if user don't want to add anymore tasks
        console.log(to_do_tasks); //consolling the list with the uer's addition.
    }
}
// consolling each item line-by-line
for (let i = 0; i < to_do_tasks.length; i++) {
    console.log(to_do_tasks[i]);
}
