const canvas = document.getElementById("world");
const ctx = canvas.getContext("2d");

const intro = document.getElementById("intro");
const cockpit = document.getElementById("cockpit");
const enterCab = document.getElementById("enterCab");

const speedEl = document.getElementById("speed");
const distanceEl = document.getElementById("distance");
const phaseEl = document.getElementById("phase");
const clockEl = document.getElementById("clock");
const weatherEl = document.getElementById("weatherName");
const routeEl = document.getElementById("routeName");
const announcement = document.getElementById("announcement");

let width = 0;
let height = 0;
let running = false;
let speed = 0;
let distance = 0;
let time = 360;
let frame = 0;
let weather = "CLEAR SKY";
let route = "NEW TOKYO → ATLANTIS";

const stars = [];
const cityBlocks = [];
const rain = [];
const announcements = [
  "Welcome aboard HyperRail service 07.",
  "Acceleration tunnel is now active.",
  "Approaching elevated ocean bridge.",
  "Weather system detected ahead.",
  "Entering magnetic tunnel corridor.",
  "Cabin lights adjusting for low visibility.",
  "Next skyline crossing in five miles."
];

const resize = () => {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

  stars.length = 0;
  cityBlocks.length = 0;
  rain.length = 0;

  for (let i = 0; i < 180; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height * 0.58,
      r: Math.random() * 1.8 + 0.4,
      a: Math.random()
    });
  }

  for (let i = 0; i < 80; i++) {
    cityBlocks.push({
      side: Math.random() > 0.5 ? 1 : -1,
      z: Math.random() * 1300 + 120,
      w: Math.random() * 70 + 30,
      h: Math.random() * 240 + 80,
      lit: Math.random()
    });
  }

  for (let i = 0; i < 190; i++) {
    rain.push({
      x: Math.random() * width,
      y: Math.random() * height,
      l: Math.random() * 28 + 10,
      s: Math.random() * 12 + 9
    });
  }
};

const lerp = (a, b, t) => a + (b - a) * t;

const project = (x, y, z) => {
  const scale = 620 / z;
  return {
    x: width / 2 + x * scale,
    y: height * 0.62 + y * scale,
    scale
  };
};

const drawSky = () => {
  const cycle = (Math.sin(time / 900) + 1) / 2;

  const top = `rgb(${Math.floor(4 + cycle * 22)}, ${Math.floor(10 + cycle * 40)}, ${Math.floor(24 + cycle * 70)})`;
  const bottom = `rgb(${Math.floor(10 + cycle * 50)}, ${Math.floor(24 + cycle * 60)}, ${Math.floor(50 + cycle * 70)})`;

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, top);
  gradient.addColorStop(1, bottom);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (const star of stars) {
    ctx.globalAlpha = 0.25 + Math.sin(frame * 0.03 + star.a * 8) * 0.22;
    ctx.fillStyle = "#dff8ff";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1;
};

const drawSun = () => {
  const x = width * 0.78;
  const y = height * 0.24 + Math.sin(time / 700) * 90;

  const glow = ctx.createRadialGradient(x, y, 0, x, y, 260);
  glow.addColorStop(0, "rgba(125, 211, 252, 0.38)");
  glow.addColorStop(1, "rgba(125, 211, 252, 0)");

  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(226, 246, 255, 0.7)";
  ctx.beginPath();
  ctx.arc(x, y, 42, 0, Math.PI * 2);
  ctx.fill();
};

const drawGround = () => {
  const horizon = height * 0.62;

  ctx.fillStyle = "#06111f";
  ctx.beginPath();
  ctx.moveTo(0, horizon);
  ctx.lineTo(width, horizon);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();

  for (let z = 80; z < 1500; z += 90) {
    const offset = ((frame * speed * 0.08) % 90);
    const p1 = project(-900, 120, z - offset);
    const p2 = project(900, 120, z - offset);

    ctx.strokeStyle = `rgba(94, 231, 255, ${Math.max(0, 0.4 - z / 2600)})`;
    ctx.lineWidth = Math.max(1, 7 * p1.scale);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }
};

const drawRails = () => {
  const railPairs = [-95, 95];

  for (const rail of railPairs) {
    ctx.strokeStyle = "rgba(190, 242, 255, 0.9)";
    ctx.lineWidth = 4;
    ctx.beginPath();

    for (let z = 70; z < 1500; z += 18) {
      const sway = Math.sin(z * 0.01 + frame * 0.02) * 18;
      const p = project(rail + sway, 70, z);

      if (z === 70) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }

    ctx.stroke();
  }

  for (let z = 90; z < 1300; z += 85) {
    const offset = (frame * speed * 0.1) % 85;
    const left = project(-150, 72, z - offset);
    const right = project(150, 72, z - offset);

    ctx.strokeStyle = "rgba(148, 163, 184, 0.5)";
    ctx.lineWidth = Math.max(1, 5 * left.scale);
    ctx.beginPath();
    ctx.moveTo(left.x, left.y);
    ctx.lineTo(right.x, right.y);
    ctx.stroke();
  }
};

const drawCity = () => {
  for (const block of cityBlocks) {
    block.z -= speed * 0.11;

    if (block.z < 45) {
      block.z = Math.random() * 1200 + 700;
      block.h = Math.random() * 260 + 90;
      block.w = Math.random() * 80 + 30;
      block.side = Math.random() > 0.5 ? 1 : -1;
      block.lit = Math.random();
    }

    const x = block.side * (420 + block.w * 2);
    const base = project(x, 70, block.z);
    const top = project(x, 70 - block.h, block.z);

    const w = block.w * base.scale;
    const h = base.y - top.y;

    ctx.fillStyle = block.lit > 0.45 ? "rgba(13, 31, 54, 0.92)" : "rgba(5, 15, 30, 0.88)";
    ctx.fillRect(base.x - w / 2, top.y, w, h);

    ctx.fillStyle = "rgba(94, 231, 255, 0.68)";

    for (let y = top.y + 12 * base.scale; y < base.y - 8; y += 18 * base.scale) {
      for (let xw = base.x - w / 2 + 7 * base.scale; xw < base.x + w / 2 - 8; xw += 16 * base.scale) {
        if (Math.random() > 0.72) {
          ctx.fillRect(xw, y, 5 * base.scale, 7 * base.scale);
        }
      }
    }
  }
};

const drawTunnel = () => {
  const tunnelActive = Math.floor(distance / 2.8) % 5 === 3;

  if (!tunnelActive) return;

  ctx.fillStyle = "rgba(0, 0, 0, 0.52)";
  ctx.fillRect(0, 0, width, height);

  for (let z = 120; z < 1300; z += 100) {
    const offset = (frame * speed * 0.12) % 100;
    const p = project(0, 0, z - offset);
    const rw = 920 * p.scale;
    const rh = 520 * p.scale;

    ctx.strokeStyle = `rgba(94, 231, 255, ${0.4 - z / 3800})`;
    ctx.lineWidth = Math.max(1, 8 * p.scale);
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, rw, rh, 0, Math.PI, Math.PI * 2);
    ctx.stroke();
  }
};

const drawRain = () => {
  const stormActive = Math.floor(distance / 3.5) % 4 === 2;

  weather = stormActive ? "STORM FRONT" : "CLEAR SKY";
  weatherEl.textContent = weather;

  if (!stormActive) return;

  ctx.strokeStyle = "rgba(186, 230, 253, 0.45)";
  ctx.lineWidth = 1;

  for (const drop of rain) {
    drop.y += drop.s + speed * 0.04;
    drop.x -= 2;

    if (drop.y > height + 40) {
      drop.y = -40;
      drop.x = Math.random() * width;
    }

    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x - 10, drop.y + drop.l);
    ctx.stroke();
  }

  if (Math.random() < 0.012) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.22)";
    ctx.fillRect(0, 0, width, height);
  }
};

const drawGlass = () => {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.08)");
  gradient.addColorStop(0.42, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(1, "rgba(94, 231, 255, 0.06)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.18, 0);
  ctx.lineTo(width * 0.06, height);
  ctx.moveTo(width * 0.82, 0);
  ctx.lineTo(width * 0.94, height);
  ctx.stroke();
};

const updateUI = () => {
  speedEl.textContent = Math.round(speed);
  distanceEl.textContent = distance.toFixed(1);
  routeEl.textContent = route;

  const hours = Math.floor(time / 60) % 24;
  const minutes = Math.floor(time % 60);
  clockEl.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

  if (speed < 80) phaseEl.textContent = "Departing";
  else if (speed < 240) phaseEl.textContent = "Accelerating";
  else if (Math.floor(distance / 2.8) % 5 === 3) phaseEl.textContent = "Tunnel";
  else if (weather === "STORM FRONT") phaseEl.textContent = "Storm";
  else phaseEl.textContent = "Cruising";
};

const announce = () => {
  const index = Math.floor(distance / 2) % announcements.length;
  announcement.textContent = announcements[index];
};

const loop = () => {
  frame++;

  if (running) {
    speed = lerp(speed, 386, 0.006);
    distance += speed / 36000;
    time += 0.018;
  }

  drawSky();
  drawSun();
  drawGround();
  drawCity();
  drawRails();
  drawTunnel();
  drawRain();
  drawGlass();
  updateUI();

  if (frame % 240 === 0) announce();

  requestAnimationFrame(loop);
};

enterCab.addEventListener("click", () => {
  intro.classList.add("hidden");
  cockpit.classList.remove("hidden");
  running = true;
});

document.querySelectorAll("[data-route]").forEach(button => {
  button.addEventListener("click", () => {
    route = button.dataset.route;
    distance = 0;
    speed = 120;
    announcement.textContent = `Route changed. Now departing ${route}.`;
  });
});

window.addEventListener("resize", resize);

resize();
loop();
