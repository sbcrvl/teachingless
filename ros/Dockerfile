
FROM moveit/moveit2:humble-source

################################################################################

RUN sudo apt update
RUN sudo apt install -y \
    tmux \
    ros-humble-ur

################################################################################

WORKDIR /root/ws_moveit/
COPY ./ws_moveit/src/ src/
