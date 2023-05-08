# DATA LAYER

## Data

- toDo : string
- isDone: boolean

## Modifications

- toDo:

  - addNewToDo(): Add new toDo to list, sends Post request to APi
  - deleteToDo(): delete toDo from list, Sends Delete request to Api
  - updateToDo(): Update toDo value. Sends Put request to Api

- isDone :
  - isDoneState(): toggle state not-done || done

# COMPONENTS

## App

- Renders an Header component
- Renders a Form component
- Renders a List component
- Renders a Button component

## Header

- Shows ToDo title

## Form

- Receives Task from user input
- Sends Task to API
- Updates Task from user input

## List

- Shows list of ToDos
- Shows Button of task done
- Shows Button of delete task

## Button

- Receives an actionOnClick

### Button isDone

- Shows if a task isDone
- Calls the isDoneState function when the user clicks on it

### Button Update

- Calls the updateToDo function

### Button Delete

- Calls the deleteTodo function

### Button Create

- Calls the addNewToDo function
