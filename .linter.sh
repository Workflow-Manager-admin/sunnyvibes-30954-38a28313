#!/bin/bash
cd /home/kavia/workspace/code-generation/sunnyvibes-30954-38a28313/sunnyvibes
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

