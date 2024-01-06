import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./components/Task";
import TaskBoard from "./components/TaskBoard";
import TaskForm from "./components/TaskForm";

let taskCount = 1;

function App() {
  const [task, setTask] = useState({
    todoList: {
      key: "todoList",
      title: "Todo",
      items: [
        {
          key: "task1",
          name: "Imran",
          number: 5,
          date: "10:30 PM",
        },
      ],
      showForm: true,
    },
    progressList: {
      key: "progressList",
      title: "In Progress",
      items: [],
    },
    doneList: {
      key: "doneList",
      title: "Done",
      items: [],
      isDone: true,
    },
  });

  const addNewTask = (taskItem) => {
    taskItem.key = `task${taskCount + 1}`;
    taskCount++;
    const newItems = [...task.todoList.items];
    newItems.push(taskItem);
    setTask({
      ...task,
      todoList: {
        ...task.todoList,
        items: newItems,
      },
    });
  };

  const onDragEnd = (e) => {
    if (e.source.droppableId == e.destination.droppableId) {
      const tastList = [...task[e.source.droppableId].items];
      const src = tastList[e.source.index];
      tastList.splice(e.source.index, 1);
      tastList.splice(e.destination.index, 0, src);

      setTask({
        ...task,
        [e.source.droppableId]: {
          ...task[e.source.droppableId],
          items: tastList,
        },
      });
    } else {
      const targetTask = task[e.source.droppableId].items[e.source.index];

      const des = [...task[e.destination.droppableId].items];
      des.splice(e.destination.index, 0, targetTask);

      setTask({
        ...task,
        [e.source.droppableId]: {
          ...task[e.source.droppableId],
          items: task[e.source.droppableId].items.filter(
            (_, i) => i != e.source.index
          ),
        },
        [e.destination.droppableId]: {
          ...task[e.destination.droppableId],
          items: des,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="max-w-[1104px] mx-auto">
        <p className=" text-center text-2xl font-medium mb-4">Task Board</p>
        <div className=" grid grid-cols-3 gap-4 justify-between min-h-[85vh]">
          {Object.values(task).map((taskBoard, i) => (
            <Droppable key={taskBoard.key} droppableId={taskBoard.key}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="h-[80vh] shadow-custom overflow-auto"
                >
                  <TaskBoard title={taskBoard.title}>
                    <div className="space-y-2">
                      {taskBoard.items.map((item, j) => (
                        <Draggable
                          key={item.key}
                          draggableId={item.key}
                          index={j}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Task
                                date={item.date}
                                name={item.name}
                                number={item.number}
                                isDone={taskBoard.isDone}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                    {taskBoard.showForm && (
                      <div className="mt-4">
                        <TaskForm addNewTask={addNewTask} />
                      </div>
                    )}
                  </TaskBoard>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
