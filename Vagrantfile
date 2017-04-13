# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  #config.vm.box = "ubuntu/xenial64"
  config.vm.box = "v0rtex/xenial64"

  config.vm.provider "virtualbox" do |v|
    v.memory = 512
  end

  config.ssh.username = 'vagrant'
  config.ssh.password = 'vagrant'

  config.vm.box_check_update = false

  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.network :forwarded_port, guest: 80, host: 4568
  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 3001, host: 3001

  # Change the vagrant user's shell to use zsh
  # config.vm.provision :shell, inline: "chsh -s /bin/zsh vagrant"

  # Vundle install
  config.vm.provision :shell, privileged: false,
  inline: "git clone git://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim"

end
