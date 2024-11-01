################################################################################
# https://github.com/osrf/docker_images/blob/master/ros/humble/ubuntu/jammy/desktop-full/Dockerfile
FROM osrf/ros:humble-desktop-full-jammy

################################################################################

RUN sudo apt update
RUN sudo apt install -y \
    tmux

################################################################################

WORKDIR /ros2_ws/src
RUN git clone https://github.com/ros/ros_tutorials.git -b humble
WORKDIR /ros2_ws
RUN rosdep install -i --from-path src --rosdistro humble -y
# RUN colcon build