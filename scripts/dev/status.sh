# view bulk branch and status information
for dir in $(ls -d */)
do 
  cd $dir
  echo $dir
  git branch
  git status
  ls -la node_modules | grep "\->"
  echo ------------------------------
  cd ..
done


