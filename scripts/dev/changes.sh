# dump changed files in last 4 days

for dir in $(ls -d */)
do 
  cd $dir
  echo $dir
  git log --pretty=format: --name-only --since="4 days ago" | sort | uniq
  echo ------------------------------
  cd ..
done
