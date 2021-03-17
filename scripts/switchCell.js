function switchCell(cell) {
  let cellIndex = cell.id;
  if (cell.textContent != "33") {
    switch (cellIndex) {
      case "p11":
        if (p12.textContent == "33") {
          let temp = p11.textContent;
          p11.textContent = p12.textContent;
          p12.textContent = temp;
          p11.style.background = `url(./style/Photos/${p11.textContent}.jpg)`;
          p12.style.background = `url(./style/Photos/${p12.textContent}.jpg)`;
        }
        if (p21.textContent == "33") {
          let temp = p21.textContent;
          p21.textContent = p11.textContent;
          p11.textContent = temp;
          p21.style.background = `url(./style/Photos/${p21.textContent}.jpg)`;
          p11.style.background = `url(./style/Photos/${p11.textContent}.jpg)`;
        }
        break;
      case "p12":
        if (p11.textContent == "33") {
          let temp = p11.textContent;
          p11.textContent = p12.textContent;
          p12.textContent = temp;
          p11.style.background = `url(./style/Photos/${p11.textContent}.jpg)`;
          p12.style.background = `url(./style/Photos/${p12.textContent}.jpg)`;
        }
        if (p22.textContent == "33") {
          let temp = p22.textContent;
          p22.textContent = p12.textContent;
          p12.textContent = temp;
          p22.style.background = `url(./style/Photos/${p22.textContent}.jpg)`;
          p12.style.background = `url(./style/Photos/${p12.textContent}.jpg)`;
        }
        if (p13.textContent == "33") {
          let temp = p13.textContent;
          p13.textContent = p12.textContent;
          p12.textContent = temp;
          p13.style.background = `url(./style/Photos/${p13.textContent}.jpg)`;
          p12.style.background = `url(./style/Photos/${p12.textContent}.jpg)`;
        }
        break;
      case "p13":
        if (p12.textContent == "33") {
          let temp = p13.textContent;
          p13.textContent = p12.textContent;
          p12.textContent = temp;
          p13.style.background = `url(./style/Photos/${p13.textContent}.jpg)`;
          p12.style.background = `url(./style/Photos/${p12.textContent}.jpg)`;
        }
        if (p23.textContent == "33") {
          let temp = p13.textContent;
          p13.textContent = p23.textContent;
          p23.textContent = temp;
          p23.style.background = `url(./style/Photos/${p23.textContent}.jpg)`;
          p13.style.background = `url(./style/Photos/${p13.textContent}.jpg)`;
        }
        break;
      case "p21":
        if (p11.textContent == "33") {
          let temp = p21.textContent;
          p21.textContent = p11.textContent;
          p11.textContent = temp;
          p11.style.background = `url(./style/Photos/${p11.textContent}.jpg)`;
          p21.style.background = `url(./style/Photos/${p21.textContent}.jpg)`;
        }
        if (p22.textContent == "33") {
          let temp = p21.textContent;
          p21.textContent = p22.textContent;
          p22.textContent = temp;
          p22.style.background = `url(./style/Photos/${p22.textContent}.jpg)`;
          p21.style.background = `url(./style/Photos/${p21.textContent}.jpg)`;
        }
        if (p31.textContent == "33") {
          let temp = p21.textContent;
          p21.textContent = p31.textContent;
          p31.textContent = temp;
          p31.style.background = `url(./style/Photos/${p31.textContent}.jpg)`;
          p21.style.background = `url(./style/Photos/${p21.textContent}.jpg)`;
        }
        break;
      case "p22":
        if (p12.textContent == "33") {
          let temp = p22.textContent;
          p22.textContent = p12.textContent;
          p12.textContent = temp;
          p22.style.background = `url(./style/Photos/${p22.textContent}.jpg)`;
          p12.style.background = `url(./style/Photos/${p12.textContent}.jpg)`;
        }
        if (p21.textContent == "33") {
          let temp = p22.textContent;
          p22.textContent = p21.textContent;
          p21.textContent = temp;
          p21.style.background = `url(./style/Photos/${p21.textContent}.jpg)`;
          p22.style.background = `url(./style/Photos/${p22.textContent}.jpg)`;
        }
        if (p23.textContent == "33") {
          let temp = p22.textContent;
          p22.textContent = p23.textContent;
          p23.textContent = temp;
          p22.style.background = `url(./style/Photos/${p22.textContent}.jpg)`;
          p23.style.background = `url(./style/Photos/${p23.textContent}.jpg)`;
        }
        if (p32.textContent == "33") {
          let temp = p22.textContent;
          p22.textContent = p32.textContent;
          p32.textContent = temp;
          p22.style.background = `url(./style/Photos/${p22.textContent}.jpg)`;
          p32.style.background = `url(./style/Photos/${p32.textContent}.jpg)`;
        }
        break;
      case "p23":
        if (p13.textContent == "33") {
          let temp = p13.textContent;
          p13.textContent = p23.textContent;
          p23.textContent = temp;
          p13.style.background = `url(./style/Photos/${p13.textContent}.jpg)`;
          p23.style.background = `url(./style/Photos/${p23.textContent}.jpg)`;
        }
        if (p33.textContent == "33") {
          let temp = p33.textContent;
          p33.textContent = p23.textContent;
          p23.textContent = temp;
          p23.style.background = `url(./style/Photos/${p23.textContent}.jpg)`;
          p33.style.background = `url(./style/Photos/${p33.textContent}.jpg)`;
        }
        if (p22.textContent == "33") {
          let temp = p22.textContent;
          p22.textContent = p23.textContent;
          p23.textContent = temp;
          p22.style.background = `url(./style/Photos/${p22.textContent}.jpg)`;
          p23.style.background = `url(./style/Photos/${p23.textContent}.jpg)`;
        }
        break;
      case "p31":
        if (p21.textContent == "33") {
          let temp = p21.textContent;
          p21.textContent = p31.textContent;
          p31.textContent = temp;
          p21.style.background = `url(./style/Photos/${p21.textContent}.jpg)`;
          p31.style.background = `url(./style/Photos/${p31.textContent}.jpg)`;
        }
        if (p32.textContent == "33") {
          let temp = p32.textContent;
          p32.textContent = p31.textContent;
          p31.textContent = temp;
          p32.style.background = `url(./style/Photos/${p32.textContent}.jpg)`;
          p31.style.background = `url(./style/Photos/${p31.textContent}.jpg)`;
        }
        break;
      case "p32":
        if (p22.textContent == "33") {
          let temp = p22.textContent;
          p22.textContent = p32.textContent;
          p32.textContent = temp;
          p22.style.background = `url(./style/Photos/${p22.textContent}.jpg)`;
          p32.style.background = `url(./style/Photos/${p32.textContent}.jpg)`;
        }
        if (p31.textContent == "33") {
          let temp = p31.textContent;
          p31.textContent = p32.textContent;
          p32.textContent = temp;
          p31.style.background = `url(./style/Photos/${p31.textContent}.jpg)`;
          p32.style.background = `url(./style/Photos/${p32.textContent}.jpg)`;
        }
        if (p33.textContent == "33") {
          let temp = p33.textContent;
          p33.textContent = p32.textContent;
          p32.textContent = temp;
          p33.style.background = `url(./style/Photos/${p33.textContent}.jpg)`;
          p32.style.background = `url(./style/Photos/${p32.textContent}.jpg)`;
        }
        break;
      case "p33":
        if (p32.textContent == "33") {
          let temp = p33.textContent;
          p33.textContent = p32.textContent;
          p32.textContent = temp;
          p32.style.background = `url(./style/Photos/${p32.textContent}.jpg)`;
          p33.style.background = `url(./style/Photos/${p33.textContent}.jpg)`;
        }
        if (p23.textContent == "33") {
          let temp = p33.textContent;
          p33.textContent = p23.textContent;
          p23.textContent = temp;
          p23.style.background = `url(./style/Photos/${p23.textContent}.jpg)`;
          p33.style.background = `url(./style/Photos/${p33.textContent}.jpg)`;
        }
        break;
    }

    if (checkWin()) {
      title.innerHTML = "<h1>YAY !!! YOU WON</h1>";
      setTimeout(function() {
        title.innerHTML = "<h1>8-Puzzle-Game</h1>";
      }, 2000);
    }
  }
}
