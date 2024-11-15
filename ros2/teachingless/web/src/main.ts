import "./style.css";
import { initializeClient } from "./roslibjs.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Teachingless Web</h1>
    <div class="card">
      <button id="publisher" type="button">Publish message</button>
    </div>
  </div>
`;

initializeClient(document.querySelector<HTMLButtonElement>("#publisher")!);
