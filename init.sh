curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
nvm install node
nvm use node
sudo yum upgrade
sudo yum install git
git clone https://github.com/eliteblanca/consultameFrontEnd.git
git clone https://github.com/eliteblanca/consultameBackEnd.git
cd consultameBackEnd/
npm install
npm run build
cd ../consultameFrontEnd
npm install
npm run buildprod
sudo yum install nginx
sudo yum install vim    
cd ../consultameBackEnd/
sudo mv ngxapp.conf /etc/nginx/conf.d/
sudo restorecon  /etc/nginx/conf.d/
sudo restorecon  /etc/nginx/conf.d/*
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/server.key -out /etc/nginx/server.crt
npm install pm2 -g
pm2 start dist/main.js