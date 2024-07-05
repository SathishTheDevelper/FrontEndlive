import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Modal, Button, Input, DatePicker, Avatar, Tooltip } from 'antd';
import { PlusOutlined, EditOutlined, ExclamationCircleOutlined, CalendarOutlined, UserOutlined, FlagOutlined } from '@ant-design/icons';
import moment from 'moment';

// Mock data
const initialData = {
  columns: {
    column1: {
      id: 'column1',
      title: 'Backlog',
      taskIds: ['task1', 'task2'],
    },
    column2: {
      id: 'column2',
      title: 'To Do',
      taskIds: ['task3'],
    },
    column3: {
      id: 'column3',
      title: 'Pending',
      taskIds: ['task4'],
    },
    column4: {
      id: 'column4',
      title: 'Run',
      taskIds: ['task5'],
    },
    column5: {
      id: 'column5',
      title: 'Done',
      taskIds: [],
    },
  },
  tasks: {
    task1: {
      id: 'task1',
      title: 'Mail App',
      description: 'Mail application and screens will be added',
      imgUrl: 'https://via.placeholder.com/150',
      assignee: 'User1',
      priority: 3,
      comments: 3,
      daysLeft: 7,
    },
    task2: {
      id: 'task2',
      title: 'Invoice',
      description: 'Invoices are ready for generation',
      imgUrl: 'https://via.placeholder.com/150',
      assignee: 'User2',
      priority: 2,
      comments: 2,
      daysLeft: 5,
    },
    task3: {
      id: 'task3',
      title: 'Write Blog',
      description: 'Explain why it should be chosen',
      imgUrl: 'https://via.placeholder.com/150',
      assignee: 'User3',
      priority: 1,
      comments: 1,
      daysLeft: 7,
    },
    task4: {
      id: 'task4',
      title: 'Landing Page Update',
      description: 'Will be redesigned',
      imgUrl: 'https://via.placeholder.com/150',
      assignee: 'User4',
      priority: 1,
      comments: 3,
      daysLeft: 5,
    },
    task5: {
      id: 'task5',
      title: 'Bug Fix',
      description: 'Minor bugs will be fixed',
      imgUrl: 'https://via.placeholder.com/150',
      assignee: 'User5',
      priority: 3,
      comments: 3,
      daysLeft: 7,
    },
  },
  columnOrder: ['column1', 'column2', 'column3', 'column4', 'column5'],
};

const KanbanBoard = () => {
  const [state, setState] = useState(initialData);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ id: '', title: '', description: '', dueDate: null });
  const [newColumn, setNewColumn] = useState({ id: '', title: '', color: '' });
  const [activeColumnId, setActiveColumnId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
  };

  const openTaskModal = (columnId) => {
    setActiveColumnId(columnId);
    setIsEditMode(false);
    setIsTaskModalOpen(true);
  };

  const openEditModal = (task) => {
    setNewTask(task);
    setIsEditMode(true);
    setIsTaskModalOpen(true);
  };

  const openColumnModal = () => {
    setIsColumnModalOpen(true);
  };

  const closeModal = () => {
    setIsTaskModalOpen(false);
    setIsColumnModalOpen(false);
    setNewTask({ id: '', title: '', description: '', dueDate: null });
    setNewColumn({ id: '', title: '', color: '' });
  };

  const handleTaskInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleDateChange = (date, dateString) => {
    setNewTask({ ...newTask, dueDate: dateString });
  };

  const handleColumnInputChange = (e) => {
    const { name, value } = e.target;
    setNewColumn({ ...newColumn, [name]: value });
  };

  const addNewTask = () => {
    const newTaskId = `task${Date.now()}`;
    const newTaskObject = { id: newTaskId, ...newTask };

    const updatedState = {
      ...state,
      tasks: {
        ...state.tasks,
        [newTaskId]: newTaskObject,
      },
      columns: {
        ...state.columns,
        [activeColumnId]: {
          ...state.columns[activeColumnId],
          taskIds: [...state.columns[activeColumnId].taskIds, newTaskId],
        },
      },
    };

    setState(updatedState);
    closeModal();
  };

  const updateTask = () => {
    const updatedTasks = {
      ...state.tasks,
      [newTask.id]: newTask,
    };

    const updatedState = {
      ...state,
      tasks: updatedTasks,
    };

    setState(updatedState);
    closeModal();
  };

  const handleSubmitTask = () => {
    if (isEditMode) {
      updateTask();
    } else {
      addNewTask();
    }
  };

  const addNewColumn = () => {
    const newColumnId = `column${Date.now()}`;
    const newColumnObject = { id: newColumnId, title: newColumn.title, taskIds: [], color: newColumn.color };

    const updatedState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumnId]: newColumnObject,
      },
      columnOrder: [...state.columnOrder, newColumnId],
    };

    setState(updatedState);
    closeModal();
  };

  return (
    <>
      <div className='d_f j_c_f_e mb-2'>
        <Button onClick={openColumnModal} className="btn-sm btn-primary">Add New Column</Button>
      </div>
      <div className="page-wrapper">
        <div className="container2">
          <DragDropContext onDragEnd={onDragEnd}>
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

              return (
                <Droppable key={column.id} droppableId={column.id}>
                  {(provided, snapshot) => (
                    <div
                      className={`column ${snapshot.isDraggingOver ? 'draggingOver' : ''}`}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <div className="column-title" style={{ backgroundColor: column.color }}>
                        <div className="d_f j_c_s_b a_i_c">
                          <h3 className="heading_text">{column.title}</h3>
                          <PlusOutlined className="add-icon" onClick={() => openTaskModal(column.id)} />
                        </div>
                      </div>
                      <div className="task-list">
                        {tasks.map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`task ${snapshot.isDragging ? 'dragging' : ''}`}
                              >
                                <div className="task-header d_f j_c_s_b a_i_c">
                                  <h5>{task.title}</h5>
                                  <EditOutlined className="edit-icon" onClick={() => openEditModal(task)} />
                                </div>
                                <div className="task-body">
                                  <p>{task.description}</p>
                                  <Tooltip title="Assignee">
                                    <p className="assignee">
                                      <Avatar style={{ backgroundColor: '#87d068' }} size={25} icon={<UserOutlined />} /> {task.assignee}
                                    </p>
                                  </Tooltip>
                                  <Tooltip title="Due Date">
                                    <p className="date mt-1 mb-1">
                                      <CalendarOutlined style={{ fontSize: "18px" }} /> {task.dueDate || '-'}
                                    </p>
                                  </Tooltip>
                                  <Tooltip title="Priority">
                                    <p className="priority">
                                      <FlagOutlined style={{ fontSize: "18px" }} /> {task.priority}
                                    </p>
                                  </Tooltip>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    </div>
                  )}
                </Droppable>
              );
            })}
          </DragDropContext>
        </div>

        <Modal
          title={isEditMode ? "Edit Task" : "Add New Task"}
          visible={isTaskModalOpen}
          onCancel={closeModal}
          footer={[
            <Button key="cancel" className='btn-sm btn_cancel' onClick={closeModal}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" className='btn-sm btn-primary' onClick={handleSubmitTask}>
              {isEditMode ? "Update Task" : "Add Task"}
            </Button>,
          ]}
        >
          <form>
            <label>
              Title:
              <Input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleTaskInputChange}
              />
            </label>
            <br />
            <label>
              Description:
              <Input.TextArea
                name="description"
                value={newTask.description}
                onChange={handleTaskInputChange}
              />
            </label>
            <br />
            <label>
              Due Date:
              <DatePicker
                value={newTask.dueDate ? moment(newTask.dueDate) : null}
                onChange={handleDateChange}
              />
            </label>
          </form>
        </Modal>

        <Modal
          title="Add New Column"
          visible={isColumnModalOpen}
          onCancel={closeModal}
          footer={[
            <Button key="cancel" onClick={closeModal} className='btn-sm btn_cancel'>
              Cancel
            </Button>,
            <Button key="submit" type="primary" className='btn-sm btn-primary' onClick={addNewColumn}>
              Save
            </Button>,
          ]}
        >
          <form>
            <label>
              Column Name:
              <Input
                type="text"
                name="title"
                value={newColumn.title}
                onChange={handleColumnInputChange}
              />
            </label>
            <br />
            {/* <label>
              Column Color:
              <Input
                type="color"
                name="color"
                value={newColumn.color}
                onChange={handleColumnInputChange}
              />
            </label> */}
          </form>
        </Modal>
      </div>
    </>
  );
};

export default KanbanBoard;
