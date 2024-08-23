# Simple Deploy


```sh
$ apt update
$ apt install vim -y
```

```sh
$ wget -P ~/ https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
$ chmod +x ~/Miniconda3-latest-Linux-x86_64.sh
$ ~/Miniconda3-latest-Linux-x86_64.sh -b
$ export PATH=~/miniconda3/bin:$PATH
$ conda init & conda config --set auto_activate_base false
# close and start a new session
$ conda env list
$ conda create --name bar python=3.12.4 -y
$ conda activate bar
```


```sh
$ conda install -c conda-forge cudatoolkit=11.0 -y
$ conda install -c conda-forge nodejs -y
$ which node
$ node server.js
```