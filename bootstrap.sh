#!/usr/bin/env bash

apt-get update
apt-get install -y vim

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

# Enable mod_rewrite
a2enmod rewrite
# Restart apache
service apache2 restart

# Install cURL
# ------------
apt-get install -y curl

# Install Git
# -----------
apt-get install -y git-core

# Install Ag
# ----------
apt-get install -y silversearcher-ag

# Install Node js
# ---------------
apt-get install -y python-software-properties python g++ make
add-apt-repository -y ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs

# Upgrade NPM
# -----------
npm update -g npm

# Install Bower
# -------------
npm install -g bower

# Install Grunt
# -------------
npm install -g grunt-cli
