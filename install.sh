# Check if Node.js is already installed
if command -v node &>/dev/null; then
    echo "Node.js is already installed"
else
    echo "Node.js is not installed"
    exit 0
fi

# Display installed Node.js and npm versions
echo "NODE VERSION = "
node -v
echo "NPM VERSION = "
npm -v
echo ""
# Insalling Node Packages
echo "- - - - - - - - - - - - - - - - - - -";
echo ""
echo "Installing node packages"
npm i
echo "Installing node packages completed"
echo ""
echo "- - - - - - - - - - - - - - - - - - -"

# Create .env file
echo ""
echo "Creating .env file"
echo "ENV_VARIABLE=value" > .env

# Check if .env file is created
if [ -f .env ]; then
    echo ".env file created successfully."
else
    echo "Failed to create .env file."
    exit 1
fi
echo ""
echo "- - - - - - - - - - - - - - - - - - -";