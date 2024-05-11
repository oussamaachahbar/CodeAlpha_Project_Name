document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskTable = document.getElementById("taskTable");

  addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
          addTask(taskText, new Date());
          taskInput.value = "";
      }
  });

  function addTask(taskText, creationDate) {
      const row = taskTable.insertRow(-1);
      const nameCell = row.insertCell(0);
      const dateCell = row.insertCell(1);
      const actionsCell = row.insertCell(2);
      
      nameCell.textContent = taskText;
      dateCell.textContent = formatDate(creationDate);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", function() {
          row.remove();
      });

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", function() {
          const newName = prompt("Enter new name for the task:");
          if (newName !== null && newName.trim() !== "") {
              nameCell.textContent = newName;
          }
      });

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      completeBtn.addEventListener("click", function() {
          row.style.textDecoration = "line-through";
          completeBtn.disabled = true;
          editBtn.disabled = true;
      });

      actionsCell.appendChild(deleteBtn);
      actionsCell.appendChild(editBtn);
      actionsCell.appendChild(completeBtn);
  }

  function formatDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return date.toLocaleDateString(undefined, options);
  }
});
