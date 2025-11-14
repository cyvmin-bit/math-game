body {
    font-family: "Poppins", Arial, sans-serif;
    background: #eef0f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: white;
    padding: 30px;
    width: 420px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    text-align: center;
}

h2 {
    margin-bottom: 10px;
    font-size: 28px;
}

#question {
    font-size: 32px;
    margin: 20px 0;
    font-weight: bold;
}

/* Remove number input arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number] {
    -moz-appearance: textfield; /* Firefox */
}

input {
    padding: 12px;
    width: 150px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 18px;
    text-align: center;
}

button {
    padding: 12px 20px;
    border: none;
    background: #007bff;
    color: white;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 15px;
}

button:hover {
    background: #0069d9;
}

#timer {
    font-size: 20px;
    margin-top: 10px;
    color: #ff3b30;
    font-weight: bold;
}

select {
    padding: 10px;
    border-radius: 6px;
    font-size: 16px;
    margin-bottom: 10px;
}

#feedback {
    margin-top: 15px;
    font-size: 22px;
    font-weight: bold;
}
