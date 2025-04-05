// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  let mode = document.body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
  alert("Switched to " + mode);
}

// AI-Powered Diet Plan
function generateDietPlan() {
  const meals = ["Salad & Avocado 🥗", "Grilled Chicken 🍗", "Oatmeal & Fruits 🍎", "Protein Shake 🥤"];
  let dietPlan = "Your AI-Powered Meal Plan: \n" + meals[Math.floor(Math.random() * meals.length)];
  document.getElementById("dietPlan").innerHTML = `<h3>${dietPlan}</h3>`;
}

// AI-Powered Workout Plan
function generateWorkoutPlan() {
  const workouts = ["Push-ups 💪", "Running 🏃‍♂️", "Yoga 🧘‍♀️", "Cycling 🚴"];
  let workoutPlan = "Recommended Workout: \n" + workouts[Math.floor(Math.random() * workouts.length)];
  document.getElementById("workoutPlan").innerHTML = `<h3>${workoutPlan}</h3>`;
}

// Health Tracking - Fake Vitals (Simulated Data)
function trackHealthMetrics() {
  let bpm = Math.floor(Math.random() * (120 - 60) + 60);
  let steps = Math.floor(Math.random() * (10000 - 5000) + 5000);
  let calories = Math.floor(Math.random() * (800 - 300) + 300);

  document.getElementById("healthData").innerHTML = `
      <h3>Live Health Data</h3>
      <p>Heart Rate: ${bpm} BPM ❤️</p>
      <p>Steps Today: ${steps} 🚶‍♂️</p>
      <p>Calories Burned: ${calories} kcal 🔥</p>
  `;
}

// Heart Game Logic (FIXED)
function startHeartGame() {
  let canvas = document.getElementById("heartGameCanvas");
  let ctx = canvas.getContext("2d");

  canvas.width = 300;
  canvas.height = 300;

  function drawHeart(x, y) {
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x - 20, y - 40, x - 40, y, x, y + 30);
      ctx.bezierCurveTo(x + 40, y, x + 20, y - 40, x, y);
      ctx.fill();
  }

  let y = 250;
  function animateHeart() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawHeart(150, y);
      y -= 2;
      if (y < 50) y = 250;
      requestAnimationFrame(animateHeart);
  }

  animateHeart();
}

// AI Chatbot Simulation
function openChatbot() {
  alert("Hello! I'm your AI Health Assistant. How can I help you?");
}

// Voice Assistant (Basic)
function startVoiceAssistant() {
  alert("Voice Assistant is not available yet! Coming soon...");
}

// AI Chatbot with Basic Responses
function openChatbot() {
  let chatbox = document.createElement("div");
  chatbox.id = "chatbox";
  chatbox.innerHTML = `
      <div id="chat-header">
          <h3>AI Health Assistant 🤖</h3>
          <button onclick="closeChatbot()">❌</button>
      </div>
      <div id="chat-messages"></div>
      <input type="text" id="user-input" placeholder="Ask me anything..." onkeydown="handleChat(event)">
      <button onclick="sendMessage()">Send</button>
  `;
  document.body.appendChild(chatbox);
}

// Close Chatbot
function closeChatbot() {
  let chatbox = document.getElementById("chatbox");
  if (chatbox) chatbox.remove();
}

// Handle User Input
function handleChat(event) {
  if (event.key === "Enter") sendMessage();
}

// AI Responses
function sendMessage() {
  let inputField = document.getElementById("user-input");
  let userMessage = inputField.value.trim();
  if (userMessage === "") return;

  let chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

  let response = getAIResponse(userMessage);
  chatMessages.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;

  inputField.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// AI Response Logic
function getAIResponse(message) {
  message = message.toLowerCase();
  
  if (message.includes("hello") || message.includes("hi")) {
      return "Hello! How can I assist you with your health today? 😊";
  } else if (message.includes("diet")) {
      return "A balanced diet includes proteins, carbs, and healthy fats! Want a meal plan? 🍏";
  } else if (message.includes("fitness")) {
      return "Exercise daily for at least 30 minutes! Need a workout plan? 💪";
  } else if (message.includes("heart rate")) {
      return "A normal resting heart rate is between 60-100 BPM. Do you want to track yours? ❤️";
  } else {
      return "I'm still learning! Ask me about diet, fitness, or health tracking. 🤖";
  }
}
// Heart Game - Click to Boost ❤️
function startHeartGame() {
  let canvas = document.getElementById("heartGameCanvas");
  let ctx = canvas.getContext("2d");

  canvas.width = 300;
  canvas.height = 300;
  let y = 250;
  let speed = -5;
  let gravity = 0.2;

  function drawHeart(x, y) {
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x - 20, y - 40, x - 40, y, x, y + 30);
      ctx.bezierCurveTo(x + 40, y, x + 20, y - 40, x, y);
      ctx.fill();
  }

  function updateGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawHeart(150, y);
      y += speed;
      speed += gravity; // Apply gravity

      if (y > 250) {
          y = 250;
          speed = -5; // Reset bounce
      }

      requestAnimationFrame(updateGame);
  }

  // Boost heart on click
  canvas.addEventListener("click", function () {
      speed = -5; // Jump effect
  });

  updateGame();
}
// AI Chatbot - Smart Health Assistant
function sendMessage() {
  let inputField = document.getElementById("user-input");
  let userMessage = inputField.value.trim();
  if (userMessage === "") return;

  let chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

  let response = getAIResponse(userMessage);
  chatMessages.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;

  inputField.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// AI Response Logic
function getAIResponse(message) {
  message = message.toLowerCase();
  
  if (message.includes("hello") || message.includes("hi")) {
      return "Hello! How can I assist you with your health today? 😊";
  } else if (message.includes("diet")) {
      return "A balanced diet includes proteins, carbs, and healthy fats! Want a meal plan? 🍏";
  } else if (message.includes("fitness")) {
      return "Exercise daily for at least 30 minutes! Need a workout plan? 💪";
  } else if (message.includes("heart rate")) {
      return "A normal resting heart rate is between 60-100 BPM. Do you want to track yours? ❤️";
  } else {
      return "I'm still learning! Ask me about diet, fitness, or health tracking. 🤖";
  }
}
