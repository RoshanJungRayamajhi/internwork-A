// // // Convert NodeList to an Array
// // let cards = Array.from(document.querySelectorAll(".card"));

// // let lastDraggedCard = null; // To track the last dragged card

// // function updateCards() {


// //     cards.forEach((card, index) => {
// //         card.style.transition = "transform 0.5s ease, opacity 0.5s ease";
// //         const nextCard = card.nextElementSibling;
// //         if (index === 0) {
// //             card.style.transform = "translateY(0%) scale(1)";
// //             card.style.opacity = "1";
// //         } else {
// //             card.style.transform = `translateY(${index * 70}%) scale(${1 - index * 0.1})`;
// //             card.style.opacity = `${1 - index * 0.2}`;
// //         }

// //         // if (!nextCard) updateCards();

// //         card.addEventListener("dragstart", () => {

// //             // Mark the current card as the last dragged
// //             lastDraggedCard = card;

// //             // Apply the transformation to the current card
// //             card.style.transform = "translateY(-100%)";
// //             card.style.opacity = "0.5";

// //             const nextCard = card.nextElementSibling;
// //             nextCard.style.transform = "translateY(0%) scale(1)";
// //             nextCard.style.opacity = "1";

// //         });

// //         // card.addEventListener("dragend", () => {
// //         //     // Reset the opacity when dragging ends
// //         //     card.style.transform = "translateY(-100%) scale(0.3)";
// //         // });
// //     })
// // }

// // updateCards();


// // Select all cards
// const cards = document.querySelectorAll('.wrapper .card');

// // Variable to track if dragging
// let isDragging = false;

// // Function to pause animations
// function pauseAnimation(card) {
//   card.style.animationPlayState = 'paused';
// }

// // Function to play animations
// function playAnimation(card) {
//   card.style.animationPlayState = 'running';
// }

// // Add event listeners to each card
// cards.forEach((card) => {
//   card.addEventListener('mousedown', () => {
//     isDragging = true;
//     pauseAnimation(card);
//   });

//   card.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//       // Optionally, update card position while dragging
//       const rect = card.getBoundingClientRect();
//       card.style.left = `${e.clientX - rect.width / 2}px`;
//       card.style.top = `${e.clientY - rect.height / 2}px`;
//       card.style.position = 'absolute';
//     }
//   });

//   card.addEventListener('mouseup', () => {
//     isDragging = false;
//     playAnimation(card);
//   });

//   card.addEventListener('mouseleave', () => {
//     if (isDragging) {
//       isDragging = false;
//       playAnimation(card);
//     }
//   });
// });
