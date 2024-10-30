#!/bin/bash
# Remove the existing directory if it exists
rm -rf content

# Clone the repository into the 'content' directory
git clone --depth 1 --branch feature/deploy https://github.com/mnfst/docs.git content
