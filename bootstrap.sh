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
apt-get install -y python-dev
apt-get install -y g++

# Web techs
apt-get install -y python-software-properties python g++ make
add-apt-repository -y ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs
ln -s /usr/bin/nodejs /usr/bin/node
apt-get install -y npm

# Zsh (http://stackoverflow.com/questions/25763017/install-oh-my-zsh-on-a-vagrant-box-as-part-of-the-bootstrap-process)
# Added zsh shell.
apt-get install -y zsh
wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh 
chsh -s $(which zsh) $(whoami)
zsh

# Change the oh my zsh default theme.
sed -i 's/ZSH_THEME="robbyrussell"/ZSH_THEME="3den"/g' ~/.zshrc

# npm fix: https://github.com/nodejs/node-v0.x-archive/issues/3911
npm install npm -g
npm update -g npm
npm install -g bower
npm install -g gulp-cli
