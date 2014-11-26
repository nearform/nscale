# dump changed files in last n days
for dir in $(ls -d */)
do 
  cd $dir
  echo $dir
  git log --pretty=format: --name-only --since="7 days ago" | sort | uniq
  echo ------------------------------
  cd ..
done
