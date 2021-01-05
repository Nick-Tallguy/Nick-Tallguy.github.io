Build indexes for lunr from the repository root:

    vendor/build-lunr-index.pl _posts/en | NODE_PATH=_path_to_vendor_ nodejs vendor/build-lunr-index.js > index-en.json
