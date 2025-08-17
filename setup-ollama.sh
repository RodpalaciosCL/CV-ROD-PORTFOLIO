#!/bin/bash

# Setup script for Ollama integration with Cursor
echo "🚀 Setting up Ollama integration for Cursor..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Ollama is installed
check_ollama_installation() {
    print_status "Checking Ollama installation..."
    
    if command -v ollama &> /dev/null; then
        print_success "Ollama is installed"
        OLLAMA_VERSION=$(ollama --version)
        print_status "Ollama version: $OLLAMA_VERSION"
        return 0
    else
        print_error "Ollama is not installed"
        print_status "Please install Ollama from https://ollama.ai"
        return 1
    fi
}

# Check if Ollama server is running
check_ollama_server() {
    print_status "Checking if Ollama server is running..."
    
    if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
        print_success "Ollama server is running"
        return 0
    else
        print_warning "Ollama server is not running"
        print_status "Starting Ollama server..."
        
        # Try to start Ollama server
        if ollama serve > /dev/null 2>&1 & then
            print_status "Ollama server started in background"
            sleep 3
            
            # Check again
            if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
                print_success "Ollama server is now running"
                return 0
            else
                print_error "Failed to start Ollama server"
                return 1
            fi
        else
            print_error "Failed to start Ollama server"
            return 1
        fi
    fi
}

# List available models
list_models() {
    print_status "Listing available models..."
    
    if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
        MODELS=$(ollama list)
        print_success "Available models:"
        echo "$MODELS"
        
        # Count models
        MODEL_COUNT=$(echo "$MODELS" | grep -c ":" || echo "0")
        print_status "Total models: $MODEL_COUNT"
        
        return 0
    else
        print_error "Cannot connect to Ollama server"
        return 1
    fi
}

# Test model generation
test_model_generation() {
    print_status "Testing model generation..."
    
    # Get the first available model
    FIRST_MODEL=$(ollama list | grep ":" | head -1 | awk '{print $1}')
    
    if [ -z "$FIRST_MODEL" ]; then
        print_warning "No models available for testing"
        return 1
    fi
    
    print_status "Testing with model: $FIRST_MODEL"
    
    # Test simple generation
    RESPONSE=$(ollama run "$FIRST_MODEL" "Hello, this is a test. Please respond with 'Test successful' if you can read this." 2>/dev/null)
    
    if echo "$RESPONSE" | grep -q "Test successful\|successful\|working"; then
        print_success "Model generation test passed"
        return 0
    else
        print_warning "Model generation test inconclusive"
        print_status "Response: $RESPONSE"
        return 0
    fi
}

# Set up environment variables
setup_environment() {
    print_status "Setting up environment variables..."
    
    # Create .env file if it doesn't exist
    if [ ! -f .env ]; then
        touch .env
    fi
    
    # Add Ollama configuration to .env
    if ! grep -q "OLLAMA_HOST" .env; then
        echo "OLLAMA_HOST=http://localhost:11434" >> .env
        print_success "Added OLLAMA_HOST to .env"
    fi
    
    if ! grep -q "CURSOR_AI_PROVIDER" .env; then
        echo "CURSOR_AI_PROVIDER=ollama" >> .env
        print_success "Added CURSOR_AI_PROVIDER to .env"
    fi
    
    # Export for current session
    export OLLAMA_HOST=http://localhost:11434
    export CURSOR_AI_PROVIDER=ollama
    
    print_success "Environment variables configured"
}

# Test API endpoints
test_api_endpoints() {
    print_status "Testing API endpoints..."
    
    # Start the development server if not running
    if ! curl -s http://localhost:5173 > /dev/null 2>&1; then
        print_status "Starting development server..."
        npm run dev > /dev/null 2>&1 &
        sleep 5
    fi
    
    # Test Ollama status endpoint
    if curl -s http://localhost:5173/api/ollama/status > /dev/null 2>&1; then
        print_success "API endpoint /api/ollama/status is working"
    else
        print_warning "API endpoint /api/ollama/status is not accessible"
    fi
    
    # Test models endpoint
    if curl -s http://localhost:5173/api/ollama/models > /dev/null 2>&1; then
        print_success "API endpoint /api/ollama/models is working"
    else
        print_warning "API endpoint /api/ollama/models is not accessible"
    fi
}

# Main setup function
main() {
    echo "=========================================="
    echo "🔧 Ollama + Cursor Setup Script"
    echo "=========================================="
    
    # Check Ollama installation
    if ! check_ollama_installation; then
        print_error "Setup failed: Ollama not installed"
        exit 1
    fi
    
    # Check Ollama server
    if ! check_ollama_server; then
        print_error "Setup failed: Cannot start Ollama server"
        exit 1
    fi
    
    # List models
    list_models
    
    # Test model generation
    test_model_generation
    
    # Setup environment
    setup_environment
    
    # Test API endpoints
    test_api_endpoints
    
    echo "=========================================="
    print_success "Setup completed successfully!"
    echo "=========================================="
    echo ""
    echo "Next steps:"
    echo "1. Start your development server: npm run dev"
    echo "2. Navigate to http://localhost:5173/ollama"
    echo "3. Test the local AI chat interface"
    echo "4. Configure Cursor to use Ollama if needed"
    echo ""
    echo "For Cursor integration:"
    echo "- Set OLLAMA_HOST=http://localhost:11434"
    echo "- Set CURSOR_AI_PROVIDER=ollama"
    echo ""
    echo "Happy coding with local AI! 🚀"
}

# Run main function
main "$@"
