#!/bin/bash

# Build the client application
echo "Building client application..."
npm run build

# Move files from dist/public to dist for static deployment
echo "Moving files to correct location for static deployment..."
if [ -d "dist/public" ]; then
    # Create dist directory if it doesn't exist
    mkdir -p dist_temp
    
    # Copy all files from dist/public to dist_temp
    cp -r dist/public/* dist_temp/
    
    # Remove old dist directory
    rm -rf dist
    
    # Rename dist_temp to dist
    mv dist_temp dist
    
    echo "Files moved successfully to dist/"
else
    echo "dist/public directory not found. Build may have failed."
    exit 1
fi

# Copy attached assets to dist directory for static deployment
echo "Copying attached assets..."
if [ -d "attached_assets" ]; then
    cp -r attached_assets dist/
    echo "Attached assets copied to dist/attached_assets/"
else
    echo "Warning: attached_assets directory not found"
fi

echo "Static build complete!"