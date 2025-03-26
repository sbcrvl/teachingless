
FROM moveit/moveit2:humble-source

################################################################################

RUN sudo apt update
RUN sudo apt install -y \
    tmux \
    ros-humble-rosbridge-server \
    ros-humble-foxglove-bridge

################################################################################

WORKDIR /root/ws_moveit/
COPY src/ ./ws_moveit/src/
