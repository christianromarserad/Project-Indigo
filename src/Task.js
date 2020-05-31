import React, { useState } from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Typography,
  Paper,
  Grid,
  IconButton,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: "2rem",
  },
  paper: {
    width: "100%",
    margin: "5px 0 5px 0",
    padding: "1rem",
  },
  buttonContainer: {
    marginBottom: "2rem",
  },
  button: {
    backgroundColor: "#6495ED",
    color: "white",
    padding: "1rem 2rem",
    "&:hover": {
      backgroundColor: "#6586c0",
    },
  },
  stepColumn: {
    color: theme.palette.grey[400],
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const Task = () => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      name: "NC Wedding (Solo)",
      steps: 7,
    },
    {
      id: "2",
      name: "NYC Wedding (Solo)",
      steps: 8,
    },
    {
      id: "3",
      name: "NC Wedding + Engagement",
      steps: 11,
    },
    {
      id: "4",
      name: "NC Wedding (Second)",
      steps: 12,
    },
    {
      id: "5",
      name: "NYC Wedding (Second)",
      steps: 7,
    },
  ]);

  const {
    mainContent,
    paper,
    buttonContainer,
    button,
    stepColumn,
  } = useStyles();

  const onDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newTodos = [...todos];
    const draggedTodo = newTodos[source.index];
    newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, draggedTodo);

    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Grid container className={mainContent}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container className={buttonContainer} alignItems="center">
          <Grid xs={true}>
            <Typography variant="h5">Tasks</Typography>
          </Grid>
          <Button className={button}>Create Tasks</Button>
        </Grid>
        <Droppable droppableId={"1"}>
          {(provided) => {
            return (
              <Grid
                container
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {todos.map(({ name, steps, id }, index) => (
                  <Draggable draggableId={id} index={index} key={id}>
                    {(provided) => (
                      <Paper
                        className={paper}
                        elevation={2}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                      >
                        <Grid container>
                          <Grid container item xs={4} alignItems="center">
                            {name}
                          </Grid>
                          <Grid container item xs={4} alignItems="center">
                            <Typography className={stepColumn}>
                              {steps} steps
                            </Typography>
                          </Grid>
                          <Grid container item xs={4} justify="flex-end">
                            <IconButton
                              onClick={() => {
                                removeTodo(index);
                              }}
                            >
                              <DeleteOutline />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Paper>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            );
          }}
        </Droppable>
      </DragDropContext>
    </Grid>
  );
};

export default Task;
