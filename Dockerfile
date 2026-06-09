# Use the official Nginx Alpine image for a lightweight, high-performance static server
FROM nginx:alpine

# Copy all static web files into the default Nginx public HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
