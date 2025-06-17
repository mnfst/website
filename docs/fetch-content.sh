#!/bin/bash

# Set default branch to 'master'
BRANCH="master"

# Check if a branch is provided as an argument
if [ ! -z "$1" ]; then
  BRANCH="$1"
fi

# Remove the existing directory if it exists
rm -rf content

# Clone the repository into the 'content' directory with the specified branch
git clone --depth 1 --branch "$BRANCH" https://github.com/mnfst/docs.git content
