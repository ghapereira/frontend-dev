#!/usr/bin/env bash

apt-get update

# Apache
apt-get install -y apache2

# Add ServerName to httpd.conf
echo "ServerName localhost" > etc/apache2/httpd.conf
# Setup hosts file
VHOST=$(cat <<EOF
<VirtualHost *:80>
    DocumentRoot "/vagrant/www/public"
    ServerName localhost
    <Directory "/vagrant/www/public">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
EOF
)
echo "${VHOST}" > /etc/apache2/sites-enabled/000-default

# Unix utils

a2enmod rewrite
service apache2 restart
apt-get install -y vim
apt-get install -y curl
apt-get install -y git-core
apt-get install -y silversearcher-ag
apt-get install -y dos2unix
apt-get install -y htop

# Web techs
apt-get install -y python-software-properties python g++ make
add-apt-repository -y ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs
npm update -g npm
npm install -g bower
npm install -g grunt-cli

