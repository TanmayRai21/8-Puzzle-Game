function startGame() {
  start.textContent = "Reshuffle";
  let gridIndex = new Array();
  let reqIndex = [11, 12, 13, 21, 22, 23, 31, 32, 33];

  //To find 9 random spots for each cropped image and store them in gridIndex
  // GridIndex represents shuffled image at the game start.

  while (gridIndex.length < 9) {
    let maxStartCount = Math.round(Math.random() * 100);
    if (reqIndex.includes(maxStartCount)) {
      if (!gridIndex.includes(maxStartCount)) {
        gridIndex[gridIndex.length] = maxStartCount;
      }
    }
  }
  //console.log(gridIndex);
  p11.textContent = gridIndex[0];
  p11.style.background = `url(./style/Photos/${gridIndex[0]}.png)`;
  p12.textContent = gridIndex[1];
  p12.style.background = `url(./style/Photos/${gridIndex[1]}.png)`;
  p13.textContent = gridIndex[2];
  p13.style.background = `url(./style/Photos/${gridIndex[2]}.png)`;
  p21.textContent = gridIndex[3];
  p21.style.background = `url(./style/Photos/${gridIndex[3]}.png)`;
  p22.textContent = gridIndex[4];
  p22.style.background = `url(./style/Photos/${gridIndex[4]}.png)`;
  p23.textContent = gridIndex[5];
  p23.style.background = `url(./style/Photos/${gridIndex[5]}.png)`;
  p31.textContent = gridIndex[6];
  p31.style.background = `url(./style/Photos/${gridIndex[6]}.png)`;
  p32.textContent = gridIndex[7];
  p32.style.background = `url(./style/Photos/${gridIndex[7]}.png)`;
  p33.textContent = gridIndex[8];
  p33.style.background = `url(./style/Photos/${gridIndex[8]}.png)`;

  const element = document.querySelectorAll(".clk");

  element.forEach(cell => {
    cell.addEventListener("click", function(event) {
      event.preventDefault();
      switchCell(cell);
    });
  });
}

function resetGame() {
  p11.textContent = 11;
  p11.style.background = `url(./style/Photos/11.png)`;
  p12.textContent = 12;
  p12.style.background = `url(./style/Photos/12.png)`;
  p13.textContent = 13;
  p13.style.background = `url(./style/Photos/13.png)`;
  p21.textContent = 21;
  p21.style.background = `url(./style/Photos/21.png)`;
  p22.textContent = 22;
  p22.style.background = `url(./style/Photos/22.png)`;
  p23.textContent = 23;
  p23.style.background = `url(./style/Photos/23.png)`;
  p31.textContent = 31;
  p31.style.background = `url(./style/Photos/31.png)`;
  p32.textContent = 32;
  p32.style.background = `url(./style/Photos/32.png)`;
  p33.textContent = 33;
  p33.style.background = `url(./style/Photos/33.png)`;
}

start.addEventListener("click", startGame);
reset.addEventListener("click", resetGame);

function checkWin() {
  if (
    p11.textContent == "11" &&
    p12.textContent == "12" &&
    p13.textContent == "13" &&
    p21.textContent == "21" &&
    p22.textContent == "22" &&
    p23.textContent == "23" &&
    p31.textContent == "31" &&
    p32.textContent == "32" &&
    p33.textContent == "33"
  ) {
    return true;
  }
  return false;
}
