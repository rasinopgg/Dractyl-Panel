# Drayctyl Panel

**Drayctyl Panel v1.0** is an open-source control panel for managing game servers and apps using Node.js, Express, and Docker. It provides a clean web interface for hosting and managing instances.

Made by MrDraynoX.

## Configuration

Rename `example_config.json` to `config.json` and edit file in the root directory to set up the application settings including the database connection and port.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd drayctyl-panel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the application:
   ```bash
   cp example_config.json config.json
   # Edit config.json with your settings (database, port, domain, etc.)
   ```

4. Build CSS:
   ```bash
   npx tailwindcss -i ./public/tw.conf -o ./public/assets/tailwind.css
   ```

5. Seed the database and create admin user:
   ```bash
   npm run seed
   npm run createUser -- --username=admin --email=admin@example.com --password=password123
   ```

6. Start the panel:
   ```bash
   npm start
   ```

7. Access the panel at `http://localhost:<port>` and log in with the created user credentials.

## Deployment on Dedicated Machine

To deploy Drayctyl Panel on a dedicated machine (e.g., VPS, dedicated server):

### Prerequisites
- Node.js 16+ installed
- npm installed
- SQLite or MySQL database
- Reverse proxy recommended (nginx/apache)

### Steps
1. Transfer the project to your machine via git clone or file upload.

2. Install dependencies as above.

3. Configure `config.json`:
   - Set `port` to desired port (e.g., 8025)
   - Set `domain` to your server's domain/IP
   - Configure database settings
   - Set other options as needed

4. For production, consider:
   - Using PM2 for process management:
     ```bash
     npm install -g pm2
     pm2 start index.js --name drayctyl
     pm2 save
     pm2 startup
     ```

   - Setting up nginx as reverse proxy:
     ```
     server {
         listen 80;
         server_name your-domain.com;

         location / {
             proxy_pass http://localhost:8025;
             proxy_set_header Upgrade $http_upgrade;
             proxy_set_header Connection "upgrade";
             proxy_set_header Host $host;
             proxy_set_header X-Real-IP $remote_addr;
             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
             proxy_set_header X-Forwarded-Proto $scheme;
         }
     }
     ```

5. Open firewall ports if needed (for the panel port).

6. Access your panel at `http://your-domain.com` or `http://server-IP:port`

## Usage

Navigate to your panel URL and log in with user credentials to manage instances.

## Contributing

Contributions are welcome! Fork the repo and open a pull request.
Bug reports and feature suggestions are also appreciated.

## License

(c) 2024 Matt James and contributors. All rights reserved. Licensed under the MIT License.
