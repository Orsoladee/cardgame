import React from "react";
import { getValue, setLastValue } from "./Utilities.jsx";

const main = document.querySelector(".main"); //main div
const pscore = document.querySelector(".score");

let colors = [
  "yellow",
  "red",
  "green",
  "blue",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
]; //random colors for squares

let square = 16; //square of game
let score = 0; //score of game
let dim = 85; //size of square
let width = 300; //width of square

const createBox = () => {
  main.style.width = width + width / 3 + "px"; //width of main div

  for (let i = 0; i < square; i++) {
    //for loop for creating squares
    const square = document.createElement("div"); //create div
    square.classList.add("square"); //add class to div
    square.setAttribute("color", ""); //set attribute to div
    square.style.width = dim + "px"; //width of square
    square.style.height = dim + "px"; //height of square
    main.appendChild(square); //append div to main div
  }
  const squares = document.querySelectorAll(".main .square"); //select all squares
  let count = 0; //count of squares
  let innerCount = []; //count of inner squares
  while (count < squares.length) {
    //while count is less than squares.length
    let index = Math.floor(Math.random() * squares.length); //random index
    if (!innerCount.includes(index)) {
      //if index is not included in innerCount
      innerCount.push(index); //push index to innerCount
      count++; //increase count
    }
  }
  let b = 0; //b is 0
  count = 0; //count is 0

  for (let i = 0; i < squares.length; i++) {
    //for loop for selecting random colors
    let color = colors[Math.floor(Math.random() * colors.length)]; //random color
    for (let f = 1; f <= 2; f++) {
      //for loop for selecting random colors
      if (b < squares.length) {
        //if b is less than squares.length
        squares[innerCount[b]].setAttribute("color", color); //set attribute to square
        b++; //increase b
      }
    }
  }
  let selectedsquares = []; //selectedsquares is empty
  squares.forEach((item) => {
    //for each item in squares
    item.addEventListener("click", (e) => {
      //add event listener to item
      e.target.classList.toggle("rotatesquare"); //toggle class of item
      e.target.style.background = item.getAttribute("color"); //set background of item
      selectedsquares.push(e.target); //push item to selectedsquares
      if (selectedsquares.length == 2) {
        //if selectedsquares.length is 2
        if (
          selectedsquares[0].getAttribute("color") ==
          selectedsquares[1].getAttribute("color") //if color of selectedsquares[0] is equal to color of selectedsquares[1]
        ) {
          score = score + 5; //increase score by 5
          pscore.textContent = score; //set text content of pscore to score
          count++; //increase count
          setLastValue(score); //set lastValue to score
          if (count === squares.length / 2) {
            //if count is equal to squares.length/2
            main.innerHTML = ""; //set innerHTML of main to empty
            createBox();
            window.alert("You won!"); //alert user
          }
        } else {
          //if color of selectedsquares[0] is not equal to color of selectedsquares[1]
          setTimeout(() => {
            selectedsquares[0].classList.toggle("rotatesquare");
            selectedsquares[0].style.background = "white";
            selectedsquares[1].classList.toggle("rotatesquare");
            selectedsquares[1].style.background = "white";
            selectedsquares = [];
          }, 500); //setTimeout for 500ms
        }
        setTimeout(() => {
          selectedsquares = [];
        }, 500);
      }
    });
  });
};

export const App = () => {
  return (
    <>
      <>{createBox()}</>
      <>{getValue()}</>
    </>
  );
};

export default App;
