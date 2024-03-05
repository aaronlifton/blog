#!/bin/sh
ffmpeg -i input.mov -c:v libvpx-vp9 -pix_fmt yuva420p output.webm
