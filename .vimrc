set number
set autoindent
colorscheme badwolf
syntax on
set tabstop=4		    " number of visual spaces per TAB
set softtabstop=4	    " number of spaces in tab when editing
set expandtab		    " tabs into spaces
set showcmd		        " show last command in bottom bar
set cursorline          " hihlight current line
set lazyredraw          " redraw only when needed
set showmatch           " match brackets and parenthesis
set incsearch           " search as characters are inserted
set hlsearch            " highlight search matches
" Use :nohlsearch to deactivate search highlight after finding
set foldenable          " enable folding (hiding parts of the file)
set foldlevelstart=10   " open most folds by default
set foldnestmax=10      " 10 nested fold max
set foldmethod=indent   " fold based on indent level
" highlight last inserted text
nnoremap gV `[v`]  
" the silver searcher, on vim
set runtimepath^=~/.vim/bundle/ag
" color after line 80
let &colorcolumn=join(range(81,999), ",")
