
FROM moveit/moveit2:humble-source

################################################################################

RUN sudo apt update
RUN sudo apt install -y \
    tmux \
    ros-humble-rosbridge-server

################################################################################

COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
