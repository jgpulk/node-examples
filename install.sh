# Check if Node.js is already installed
if command -v node &>/dev/null; then
    echo "Node.js is already installed."
else
    echo "Node.js is not installed"
    exit 0
fi

# Display installed Node.js and npm versions
echo "NODE VERSION = ";node -v
echo "NPM VERSION = ";npm -v

# Insalling Node Packages
npm i