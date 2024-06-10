### Explanation of the TODO List Functionality

This TODO list application allows users to manage tasks by adding, moving them to 'In Progress', and marking them as 'Done'.
Here's a brief overview of how it works:

1. **Adding Tasks:**
   - The user enters a task in the input field and clicks the "Add Task" button.
   - The `addTask` function is triggered, which trims any leading or trailing whitespace from the input.
   - If the task is not empty, a new list item is created with the task text and two buttons: "In Progress" and "Done".
   - The new task is added to the "TODO" section.

2. **Moving Tasks to 'In Progress':**
   - When the "In Progress" button next to a task is clicked, the `moveToInProgress` function is called.
   - This function moves the task from the "TODO" section to the "In Progress" section by appending it to the "In Progress" list.
   - The buttons for the task are updated to remove the "In Progress" button, leaving only the "Done" button.

3. **Marking Tasks as 'Done':**
   - When the "Done" button is clicked, the `moveToDone` function is called.
   - This function moves the task to the "Done" section and removes the buttons, leaving only the task text.
   - Tasks in the "Done" section cannot be moved again, indicating that they are completed.

### CSS Enhancements:
- Each section ("TODO", "In Progress", and "Done") has a gradient background for visual distinction.
- Task items within the sections have white backgrounds, black text, padding, and rounded corners.
- Long task texts wrap to the next line, ensuring they do not overflow their container.

By organizing tasks into these three sections and updating their status through button clicks,
this application helps users efficiently track their progress on various tasks.
