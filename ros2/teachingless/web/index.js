const ROSLIB = require("roslib");

var ros = new ROSLIB.Ros({
  url: "ws://localhost:9090",
});

ros.on("connection", function () {
  console.log("Connected to websocket server.");
});

ros.on("error", function (error) {
  console.log("Error connecting to websocket server: ", error);
});

ros.on("close", function () {
  console.log("Connection to websocket server closed.");
});

var topic = new ROSLIB.Topic({
  ros: ros,
  name: "/web",
  messageType: "std_msgs/msg/String",
});

const message = {
  data: "Hello world!",
};

topic.publish(message);
