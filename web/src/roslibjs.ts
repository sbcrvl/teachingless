import { Ros, Topic } from "roslib";

let rosbridge_server: Ros;

export function initializeClient(element: HTMLButtonElement) {
  rosbridge_server = new Ros({ url: "ws://localhost:9090" });

  element.addEventListener("click", publishMessage);
}

export function publishMessage() {
  const topic = new Topic({
    ros: rosbridge_server,
    name: "/web",
    messageType: "std_msgs/msg/String",
  });

  const payload = {
    data: "Hello, world!",
  };

  topic.publish(payload);
}
