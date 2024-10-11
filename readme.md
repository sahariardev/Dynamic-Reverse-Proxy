# Dynamic Reverse Proxy

## Project Description

Dynamic Reverse Proxy is a powerful tool designed to manage multiple applications running on a single machine. It allows for dynamic routing of requests based on cookies, making it easy to control which application should handle a request. This is particularly useful in microservices architectures, multi-tenant applications, or when managing different versions of an application.

## Features

- **Dynamic Routing**: Set reverse proxy rules dynamically based on cookies, enabling tailored routing for different users or sessions.
- **Multiple Application Support**: Easily manage multiple applications running on the same machine without conflicts.
- **Lightweight**: Built on top of existing HTTP server frameworks, ensuring low overhead and high performance.
- **Easy Configuration**: Simple configuration options for defining routing rules and cookie management.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   https://github.com/sahariardev/Dynamic-Reverse-Proxy
2. Go to the directory
    ```
   cd dynamic-reverse-proxy
3. Start the server
    ```
    cd backend && npm start
   ```

## Docker Command
  ```
   docker run \
     -e PATH_TO_CERT={path_to_cert} \
     -e PATH_TO_KEY={path_to_key} \
     -e REVERSE_PROXY_SERVER_PORT={proxy_server_port} \
     -e REVERSE_PROXY_CONFIG_SERVER_PORT={config_server_port} \
     -p 443:{proxy_server_port} \
     -p {config_server_port}:{config_server_port} \
     -v {path_to_cert}:{path_to_cert} \
     -v {path_to_key}:{path_to_key} \
     sahariardev/dynamic-reverse-proxy:latest
  ``` 
  
## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.

## Acknowledgments

Thanks to the Node.js community for their incredible work on the platform.  
Inspired by various open-source reverse proxy projects.

## Contact

For any inquiries or feedback, please contact me at rifatsahariar@gmail.com.
