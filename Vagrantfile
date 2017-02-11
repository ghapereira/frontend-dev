# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.provider "virtualbox" do |v|
    v.memory = 512
  end

  config.vm.box_check_update = false

  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.network :forwarded_port, guest: 80, host: 4567
  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 3001, host: 3001

  # Oh My ZSH Install section
  # Install git and zsh prerequisites
  config.vm.provision :shell, inline: "apt-get -y install git"
  config.vm.provision :shell, inline: "apt-get -y install zsh"

  # Clone Oh My Zsh from the git repo
  config.vm.provision :shell, privileged: false,
  inline: "git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh"

  # Copy in the default .zshrc config file
  config.vm.provision :shell, privileged: false,
  inline: "cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc"

  # Change the vagrant user's shell to use zsh
  config.vm.provision :shell, inline: "chsh -s /bin/zsh vagrant"

  # Copy vimrc to home
  config.vm.provision :shell, privileged: false,
  inline: "cp /vim-config/.vimrc ~/.vimrc"

  # Copy tmux.conf to home
  config.vm.provision :shell, privileged: false,
  inline: "cp /vagrant/.tmux.conf ~/.tmux.conf"

  # Vundle install
  # config.vm.provision :shell, privileged: false,
  # inline: "git clone git://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim"

end

