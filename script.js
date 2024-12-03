const style = document.createElement('style');
style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Muli&display=swap');

  *{
      box-sizing: border-box;
  }

  body {
      background-color: whitesmoke;
      font-family: 'Muli', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100vh;
      overflow: hidden;
      margin: 0;
  }

  .key {
      border: 3px solid red;
      background-color: black;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.9);
      display: inline-flex;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
      padding: 20px;
      flex-direction: column;
      margin: 10px;
      min-width: 150px;
      position: relative;

      color: white;
      border-radius: 14px;
      text-align: center;
      margin-top: 20px;
  }

  .key small {
      position: absolute;
      top: -24px;
      left: 0;
      text-align: center;
      width: 100%;
      color: #555;
      font-size: 17px;
  }
`;
document.head.appendChild(style);

const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div class="key">
      ${event.key === ' ' ? 'Space' : event.key}
      <small>event.key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>

    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
  `;
});