FROM ubuntu:22.04

################################################################################

RUN apt update
RUN apt install -y \
    cmake \
    libvncserver-dev \
    tmux

################################################################################

ADD https://github.com/LibVNC/libvncserver.git /libvncserver
WORKDIR /libvncserver/build
RUN cmake ..
RUN cmake --build .
WORKDIR /libvncserver/webclients

################################################################################

# ENTRYPOINT [ "tmux new" ]
