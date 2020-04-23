#!/bin/bash
#
## This script updates LearnOSM staging site daily with any updates from Transifex
#
logger -t tx-10pc_pull_git_push.sh cron.info
#
FOLDER1=/home/nick/Github/Nick-Tallguy.github.io
FOLDER2=/home/nick/Github/Transifex_10pc
FOLDER3=/home/nick/Github/Transifex_10pc/translations
FOLDER4=/home/nick/Github/Nick-Tallguy.github.io/_posts
FOLDER5=/home/nick/Github/Transifex_10pc/translations-temp
##
#  Update this instance from latest on Github
cd ${FOLDER1}
git pull
##
#  Pull the latest translations from Transifex to FOLDER3 (translations)
cd ${FOLDER2}
/usr/local/bin/tx pull -a
##
# Copy files for editing from FOLDER3 (translations) to FOLDER5 (translations-temp)
cp -u ${FOLDER3}/0[2-9]*.md  ${FOLDER5}/
cp -u ${FOLDER3}/19*.md  ${FOLDER5}/
##
# Remove the enhance modules that are no longer updated
rm ${FOLDER5}/0450-10-07*
#
### Move the files that do not need the script run on them
mv ${FOLDER5}/0200-12-05-* ${FOLDER4}/
mv ${FOLDER5}/0450-* ${FOLDER4}/
mv ${FOLDER5}/1900-12-31* ${FOLDER4}/
mv ${FOLDER5}/0200-12-23* ${FOLDER4}/
mv ${FOLDER5}/0500-10-15* ${FOLDER4}/
#
# Run edit script on files in FOLDER5 (translations-temp)
for f in ${FOLDER5}/*
do
sed -i '0,/^>/{/^>/d;}' $f
done
##
# Copy updated files from FOLDER 5 (temp) to FOLDER4 (_posts)
cp -u ${FOLDER5}/*.md ${FOLDER4}/
cd ${FOLDER1}
git add *
git commit -m "latest updates from Transifex"
git push origin
#
## empty FOLDER5 so they are not edited again tomorrow
rm ${FOLDER5}/*
# trash-empty 31
