# frontend-dev
This is my personal frontend development environment, consisting in a Ubuntu-based Vagrant box with some useful things
pre-installed.

## How to

[Vagrant](https://www.vagrantup.com/) is a tool for managing virtual environments. It is NOT a virtual machine provider,
such as [VirtualBox](https://www.virtualbox.org/). Rather, it provides some utilities for generating and maintaining
machines that will be provided by some virtualization tool. In fact, my setup uses VirtualBox for it.

This setup is meant to be used to develop static front-end content. It uses a [Ubuntu](http://www.ubuntu.com/) image
[provided by hashicorp] (https://atlas.hashicorp.com/ubuntu/boxes/trusty64), that is the developer of Vagrant, so it
can be used for many more things. This is just the focus I use.

In your native system (Linux, MacOSX, Windows, ...) you need to install Vagrant and a provider, VirtualBox in this case.
After installing it, you need to clone this project (git clone https://github.com/ghapereira/frontend-dev) to the directory
of your project and then run the command
```bash
vagrant up
```
It will download the box (virtual machine image) if you don't already
have it, and then it will put the machine to run. After it you just need to run vagrant ssh to login to it, and you can
exit by typing exit. To suspend the machine you need the command
```
vagrant suspend
```
and to deactivate it,
```bash
vagrant halt
```
A comprehensive list can be found [here](https://www.vagrantup.com/docs/cli/).

After the machine is installed you can notice that the contents of the project folder in your host system are synchronized
with the /vagrant directory in the vagrant box. This way you can edit the files there even if the machine isn't running.

## vim
After installing the machine, for the vim configuration to be complete you need to install the added plugins on .vimrc with 
[Vundle](https://github.com/VundleVim/Vundle.vim).
Just start vim and type ':PluginInstall' while on Normal Mode. More info about the process can be found at 
[Vundle](https://github.com/VundleVim/Vundle.vim), and the plugins I use are detailed on the .vimrc.
And the used theme is not installed (I haven't figured out how yet), so you need to clone the [Atom Dark Theme](https://github.com/gosukiwi/vim-atom-dark) and install
it according to the instructions. Then you are good to go!

## Author
Gustavo Pereira

Some resources I've used in building it:

[Doug Black's .vimrc](http://dougblack.io/words/a-good-vimrc.html)

[geomagilles' bootstrap.sh](https://github.com/geomagilles/vagrant-grunt-bower/blob/master/bootstrap.sh)

[Igor's .vimrc](http://igorcorradi.com/) -- And Igor's invaluable help!
